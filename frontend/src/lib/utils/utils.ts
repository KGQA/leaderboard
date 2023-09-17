import { NUMERIC_FIELDS } from '$lib/constants';
import matter from 'gray-matter';
import { marked } from 'marked';
import { getRawGitHubContent } from '$lib/utils/githubUrlBuilder';

import * as htmlToJson from '$lib/utils/htmlToJson';
import { get } from 'svelte/store';
import { currentTabulator } from '$lib/currentTabulator';
import { notifyError, notifySuccess } from '$lib/notifications';
import { tableBuilding } from '$lib/states/tableBuilding';
import { tableBuilt } from '$lib/states/tableBuilt';
import { lastParsedTable } from '$lib/states/lastParsedTable';
import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';
import { currentlySelectedRow } from '$lib/states/currentlySelectedRow';
import { toggleDialog } from '$lib/dialogs/dialogUtils';

export function generateRandomHash() {
	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function getBaseColumns() {
	let columns = [
		{
			title: 'Model / System',
			field: 'Model / System',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Year',
			field: 'Year',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Precision',
			field: 'Precision',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Recall',
			field: 'Recall',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'F1',
			field: 'F1',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Language',
			field: 'Language',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Reported by',
			field: 'Reported by',
			formatter: 'html',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Reported in the paper',
			field: 'Reported in the paper',
			formatter: 'html',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Link to Demo/Repo/API',
			field: 'Link to Demo/Repo/API',
			formatter: 'html',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'Original paper',
			field: 'Original paper',
			formatter: 'html',
			resizable: true,
			editor: 'input',
			visible: true
		},
		{
			title: 'id',
			field: 'id',
			visible: false,
			resizable: false,
			editor: 'input'
		}
	];

	return columns;
}

export function extendColumnsByParsedTable(parsedTable: any, columns: any) {
	for (let i = 0; i < parsedTable.length; i++) {
		parsedTable[i].id = i;
	}
	let objectKeys = Object.keys(parsedTable[0]);
	console.log(objectKeys);
	columns = columns.filter((column: { title: string }) => objectKeys.includes(column.title));

	for (let i = 0; i < objectKeys.length; i++) {
		let currObjectKey = objectKeys[i];
		if (columns.some((column: { title: string }) => column.title == currObjectKey)) continue;
		if (NUMERIC_FIELDS.includes(currObjectKey)) {
			columns.push({
				title: currObjectKey,
				field: currObjectKey,
				resizable: true,
				editor: 'input',
				visible: true,
				sorter: function (
					a: any,
					b: any,
					aRow: any,
					bRow: any,
					column: any,
					dir: any,
					sorterParams: any
				) {
					if (a == '-') a = 0;
					if (b == '-') b = 0;
					return a - b;
				}
			});
		} else {
			columns.push({
				title: currObjectKey,
				field: currObjectKey,
				resizable: true,
				editor: 'input',
				visible: true
			});
		}
	}

	return columns;
}

export function storeToLocalStorage(changes: any) {
	console.log('Storing changes in cookie!');
	console.log('new changes to store', changes);
	let changesToStore: any = {};
	changesToStore.newColumns = changes.newColumns;
	changesToStore.newRows = changes.newRows.map((row: any) => {
		return {
			dataset: row.dataset,
			row: row.row
		};
	});

	changesToStore.changedRows = changes.changedRows.map((row: any) => {
		return {
			dataset: row.dataset,
			row: row.row
		};
	});
	changesToStore.newLeaderboards = changes.newLeaderboards.map((lb: any) => {
		return {
			dataset: lb.dataset,
			data: lb.data
		};
	});
	let cookie = {
		name: `pr-changes`,
		value: JSON.stringify(changesToStore)
	};
	localStorage.setItem(cookie.name, cookie.value);
}

export async function loadSystems() {
	return loadFromGithub(null, null, true);
}

export async function load(params: any) {
	return loadFromGithub(params.db, params.dataset);
}

async function loadFromGithub(db: string | null, dataset: string | null, systems = false) {
	let mainPath = systems ? `systems_updated.md` : `${db}/${dataset}.md`;
	let headerPath = systems ? `^systems_updated.md` : `${db}/^${dataset}.md`;
	let footerPath = systems ? `$systems_updated.md` : `${db}/$${dataset}.md`;
	try {
		const githubUrl = getRawGitHubContent(`Artur-Galstyan/leaderboard`, mainPath);
		const githubUrlReq = await fetch(githubUrl);
		const githubMarkdownText = await githubUrlReq.text();
		const parsed = matter(githubMarkdownText);
		const prefaceData = {
			name: parsed.data.name,
			description: parsed.data.description,
			datasetUrl: parsed.data.datasetUrl
		};
		const htmlContent = marked.parse(parsed.content, { mangle: false, headerIds: false });
		const parsedTable = htmlToJson.parse(htmlContent).results[0];

		const githubUrlInfo = getRawGitHubContent(`Artur-Galstyan/leaderboard`, headerPath);
		const githubUrlInfoReq = await fetch(githubUrlInfo);
		const githubMarkdownTextInfo = await githubUrlInfoReq.text();
		const parsedInfo = matter(githubMarkdownTextInfo);
		const htmlContentInfo = marked.parse(parsedInfo.content, { mangle: false, headerIds: false });

		let htmlFooter = undefined;
		try {
			const githubUrlFooter = getRawGitHubContent(`Artur-Galstyan/leaderboard`, footerPath);
			const githubUrlFooterReq = await fetch(githubUrlFooter);
			if (githubUrlFooterReq.status == 404) {
				throw Error('Not found');
			}
			const githubMarkdownFooter = await githubUrlFooterReq.text();
			const parsedFooter = matter(githubMarkdownFooter);
			htmlFooter = marked.parse(parsedFooter.content, { mangle: false, headerIds: false });
		} catch (e) {
			console.log("No footer found, that's ok");
		}

		return {
			parsedTable: structuredClone(parsedTable),
			prefaceData: prefaceData,
			parsedInfo: htmlContentInfo,
			parsedFooter: htmlFooter
		};
	} catch (e) {
		throw new Error(`Failed to load dataset ${dataset} from ${db}, error ${e}`);
	}
}

export function setTableFilter(event: Event) {
	let currentTab = get(currentTabulator);
	let filterString = (event.target as HTMLInputElement).value;
	let fields = currentTab?.getColumns().map((column) => column.getField());
	if (filterString && currentTab) {
		currentTab.setFilter([
			[],
			[
				fields?.map((field) => {
					return { field: field, type: 'like', value: filterString };
				}) as any
			]
		]);
	} else if (currentTab) {
		currentTab.clearFilter(true);
	} else {
		console.error('Tabulator not initialized');
	}

	currentTabulator.set(currentTab);
}

export function setEventListeners(page: any) {
	let currentTab = get(currentTabulator);
	if (!currentTab) {
		notifyError('Tabulator not initialized', 'Failed to set event listeners');
		return;
	}
	currentTab.on('tableBuilding', () => {
		tableBuilding.set(true);
		tableBuilt.set(false);
		console.log('Table building');
	});
	currentTab.on('tableBuilt', async () => {
		tableBuilding.set(false);
		tableBuilt.set(true);

		if (currentTab) {
			console.log('Table loaded, setting lastParsedTable', currentTab.getRows());
			lastParsedTable.set(
				currentTab.getRows().map((row) => JSON.parse(JSON.stringify(row.getData())))
			);
		}
		console.log('Table built');
		let currPRChanges = get(currentPRChanges);
		if (currPRChanges) {
			console.log('Applying changes from loaded PR');
			if (currPRChanges.newColumns.length > 0) {
				console.log('Applying columns');
				currPRChanges.newColumns.forEach((column) => {
					addNewColumnToTable(column, page);
				});
			}
			if (currPRChanges.newRows.length > 0) {
				console.log('Applying rows');
				currPRChanges.newRows.forEach(async (row) => {
					if (row.dataset != page.params.db + '/' + page.params.dataset) return;
					console.log('Adding row', row.row);
					let newRow = await currentTab?.addRow(row.row);
					if (newRow) {
						let currNewTabulatorRows = get(currentNewTabulatorRows);
						let doesAlreadyExist = currNewTabulatorRows.find(
							(newTabulatorRow) => newTabulatorRow.getIndex() == newRow?.getIndex()
						);
						if (doesAlreadyExist) return;
						else currNewTabulatorRows.push(newRow);
						currentNewTabulatorRows.set(currNewTabulatorRows);
					}
					currentTab?.redraw(true);
					currentTabulator.set(currentTab);
				});
			}
			if (currPRChanges.changedRows && currPRChanges?.changedRows.length > 0) {
				currPRChanges.changedRows.forEach((row) => {
					if (row.dataset != page.params.db + '/' + page.params.dataset) return;
					console.log('Applying changed cells');
					currentTab?.getRows().forEach(async (tableRow) => {
						if (tableRow.getIndex() == row.row['id']) {
							await tableRow.update(row.row);
							row.row = tableRow.getData();
						}
					});
					currentTab?.redraw(true);
					currentTabulator.set(currentTab);
				});
			}
		}

		currentTabulator.set(currentTab);
	});
	currentTab.on('rowDblClick', (e, row) => {
		currentlySelectedRow.set(row);
		toggleDialog('show-row-dialog');
	});
	currentTab.on('cellEdited', function (cell) {
		let currPRChanges = get(currentPRChanges);
		if (!currPRChanges) {
			currentPRChanges.set(initPRChanges());
			currPRChanges = get(currentPRChanges);
		}
		if (currPRChanges && currPRChanges.changedRows == null) {
			currPRChanges.changedRows = [];
		}
		console.log("Adding row to 'changedRows'", cell.getRow().getData());

		// check if row is already in changedRows
		let rowAlreadyInChanges = currPRChanges?.changedRows.find((row) => {
			return row.row['id'] == cell.getRow().getIndex();
		});
		console.log('rowAlreadyInChanges', rowAlreadyInChanges);
		if (currPRChanges && rowAlreadyInChanges) {
			console.log('Row already in changes, updating');
			// update the row
			rowAlreadyInChanges.row = cell.getRow().getData();
			currPRChanges.lastChange = 'cell';

			return;
		} else if (currPRChanges) {
			// add the row
			console.log('Row not in changes, adding');
			let dataset = page.params.db + '/' + page.params.dataset;
			if (page.params.db === undefined && page.params.dataset === undefined) {
				if (page.route.id === '/systems') {
					dataset = 'systems';
				}
			}
			currPRChanges?.changedRows.push({
				dataset: dataset,
				row: cell.getRow().getData()
			});
			currPRChanges.lastChange = 'cell';
		}
		currentPRChanges.set(currPRChanges);
	});
	currentTab.on('headerContext', async function (e, column) {
		e.preventDefault();
		let currPRChanges = get(currentPRChanges);
		let amongNewColumns = currPRChanges?.newColumns.find((col) => {
			return col.column == column.getField();
		});
		if (!amongNewColumns) {
			// column was not user created, therefore cannot be deleted
			return;
		}
		let els = document.getElementsByClassName('delete-column-button');
		for (let i = 0; i < els.length; i++) {
			els[i].remove();
		}

		let deleteButton = document.createElement('button');
		deleteButton.classList.add('delete-column-button');
		deleteButton.innerHTML = 'Delete column';
		deleteButton.classList.add('btn', 'btn-error', 'absolute');
		deleteButton.style.top = e.clientY + window.scrollY + 'px';
		deleteButton.style.left = e.clientX + window.scrollX + 'px';
		deleteButton.onclick = async () => {
			// delete column
			if (!currPRChanges) {
				notifyError("Couldn't delete column", 'No PR changes found');
				deleteButton.remove();
				return;
			} else {
				currentTab?.hideColumn(column.getField());
				await column.delete();
				currPRChanges.lastChange = null;
				currPRChanges.newColumns = currPRChanges.newColumns.filter((col) => {
					return col.column != column.getField();
				});

				notifySuccess('Column deleted', 'Column deleted successfully');
				deleteButton.remove();
				currentPRChanges.set(currPRChanges);
			}
		};
		document.body.appendChild(deleteButton);
	});
}

export function addNewColumnToTable(newColumn: any, page: any) {
	if (newColumn == undefined) {
		console.log('no column provided, likely due to column deletion. Not adding column to table');
		return;
	}

	if (page.route.id == '/systems') {
		if (newColumn.dataset != 'systems') return;
	} else if (newColumn.dataset != page.params.db + '/' + page.params.dataset) return;

	console.log("Found dataset, adding column to table's columns", newColumn);

	let columnTitle = newColumn.column;
	let columnType = newColumn.numerical;

	let column = {
		title: columnTitle,
		field: columnTitle,
		resizable: true,
		editor: 'input'
	};

	if (columnType) {
		column['sorter'] = function (
			a: any,
			b: any,
			aRow: any,
			bRow: any,
			column: any,
			dir: any,
			sorterParams: any
		) {
			if (a == '-') a = 0;
			if (b == '-') b = 0;
			return a - b;
		};
	}
	let currTab = get(currentTabulator);
	currTab?.addColumn(column);

	// add default values to all rows for the new column
	let rows = currTab?.getRows();
	if (!rows) return;
	for (let i = 0; i < rows.length; i++) {
		let row = rows[i];
		row.update({ [columnTitle]: '-' });
	}

	currTab?.redraw(true);
	currentTabulator.set(currTab);
}
