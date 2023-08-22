<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import DatasetNavbar from '$lib/components/DatasetNavbar.svelte';
	import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import AddNewColumnDialog from '$lib/dialogs/AddNewColumnDialog.svelte';
	import AddNewLeaderboard from '$lib/dialogs/AddNewLeaderboard.svelte';
	import AddNewRowDialog from '$lib/dialogs/AddNewRowDialog.svelte';
	import AreYouSureDeleteLbDialog from '$lib/dialogs/AreYouSureDeleteLBDialog.svelte';
	import ShowRowDialog from '$lib/dialogs/ShowRowDialog.svelte';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError, notifySuccess } from '$lib/notifications';
	import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';
	import { currentlySelectedRow } from '$lib/states/currentlySelectedRow';
	import { lastParsedTable } from '$lib/states/lastParsedTable';
	import * as htmlToJson from '$lib/utils/htmlToJson';
	import {
		addNewColumnToTable,
		extendColumnsByParsedTable,
		getBaseColumns,
		load,
		loadSystems,
		setEventListeners,
		setTableFilter,
		storeToLocalStorage
	} from '$lib/utils/utils';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import * as pkg from 'tabulator-tables';

	const Tabulator = pkg.TabulatorFull;
	let parsedTable: any;
	let prefaceData: any;
	let parsedInfo: any;
	let parsedFooter: any;

	let tableBuilding = false;
	let tableBuilt = false;

	let table: string | HTMLElement;
	let filter: HTMLInputElement;

	let loading = true;
	let fadeClass = '';

	onMount(async () => {
		document.body.onclick = (event: MouseEvent) => {
			let els = document.getElementsByClassName('delete-column-button');
			for (let i = 0; i < els.length; i++) {
				els[i].remove();
			}
		};
		$currentTabulator = null;

		const loadData = await loadSystems();
		parsedTable = loadData.parsedTable;
		prefaceData = loadData.prefaceData;
		parsedInfo = loadData.parsedInfo;
		parsedFooter = loadData.parsedFooter;

		fadeClass = 'fade-in';
		if (parsedTable) {
			let columns = getBaseColumns();
			columns = extendColumnsByParsedTable(parsedTable, columns);
			// find system name column and put it in the front
			let systemNameColumn = columns.find((col) => col.field === 'System Name');
			if (systemNameColumn) {
				columns = columns.filter((col) => col.field !== 'System Name');
				columns.unshift(systemNameColumn);
			}

			try {
				$currentTabulator = new Tabulator(table, {
					data: parsedTable,
					layout: 'fitColumns', //fit columns to width of table (optional)
					height: '500', //height of table (optional)
					reactiveData: true, //enable data reactivity
					columns: columns as any,
					movableColumns: true
				});
				setEventListeners($page);
			} catch (e) {
				console.log("some error occured while loading table's data; likely got cancelled");
				$currentTabulator = null;
			}
		} else {
			// check cookie for table data
			if ($currentPRChanges) {
				let changes = $currentPRChanges;
				let doesLeaderboardExist = changes.newLeaderboards.find((lb) => {
					return lb.dataset == 'systems';
				});
				if (!doesLeaderboardExist) {
					notifyError('No leaderboard found', 'There is no leaderboard for this dataset');
					loading = false;
					tableBuilding = false;
					tableBuilt = false;
					return;
				} else {
					console.log('Leaderboard found in pr changes cookie');
					const htmlContent = marked.parse(
						changes.newLeaderboards[changes.newLeaderboards.length - 1].data,
						{ mangle: false, headerIds: false }
					);
					parsedTable = htmlToJson.parse(htmlContent).results[0];
					if (parsedTable != null) {
						console.log('Table found in pr changes cookie');
						let columns = getBaseColumns();
						columns = extendColumnsByParsedTable(parsedTable, columns);
						try {
							$currentTabulator = new Tabulator(table, {
								data: parsedTable,
								layout: 'fitColumns', //fit columns to width of table (optional)
								height: '500', //height of table (optional)
								reactiveData: true, //enable data reactivity
								columns: columns as any,
								movableColumns: true
							});
							setEventListeners($page);
						} catch (e) {
							console.log("some error occured while loading table's data; likely got cancelled");
							$currentTabulator = null;
						}
					} else {
						console.log('No table found');
					}
				}
				loading = false;
			} else console.log('No table found');
		}
		loading = false;
	});

	function openNewColumnDialog() {
		toggleDialog(`add-new-column-systems`);
	}

	function openNewRowDialog() {
		toggleDialog(`add-new-row-systems`);
	}

	currentPRChanges.subscribe((changes) => {
		if (changes) {
			if (changes.lastChange === 'column') {
				let lastColumn = changes.newColumns[changes.newColumns.length - 1];
				console.log('Adding new column', lastColumn);
				addNewColumnToTable(lastColumn, $page);
			} else if (changes.lastChange === 'leaderboard') {
				const htmlContent = marked.parse(
					changes.newLeaderboards[changes.newLeaderboards.length - 1].data,
					{ mangle: false, headerIds: false }
				);
				parsedTable = htmlToJson.parse(htmlContent).results[0];
				if (parsedTable) {
					let columns = getBaseColumns();
					columns = extendColumnsByParsedTable(parsedTable, columns);
					try {
						$currentTabulator = new Tabulator(table, {
							data: parsedTable,
							layout: 'fitColumns', //fit columns to width of table (optional)
							height: '500', //height of table (optional)
							reactiveData: true, //enable data reactivity
							columns: columns as any,
							movableColumns: true
						});
						setEventListeners($page);
					} catch (e) {
						console.log("some error occured while loading table's data; likely got cancelled");
						$currentTabulator = null;
					}
				} else {
					console.log('No table found - from currentPRChanges subscription');
				}
				loading = false;
			}
			// store this object as a cookie
			if (browser && changes.lastChange !== null) {
				storeToLocalStorage(changes);
			}
			if (tableBuilt && !tableBuilding) $currentTabulator?.redraw(true);
			$currentTabulator = $currentTabulator;
		}
	});
</script>

{#if loading}
	<div class="h-screen w-screen flex flex-col justify-center">
		<div class="flex justify-center">
			<span class="loading loading-infinity loading-lg text-primary" />
		</div>
	</div>
{:else}
	<div transition:fade|local class="">
		<DatasetNavbar datasetName={null} />
		{#if prefaceData && parsedTable}
			<main class="prose text-justify mx-auto mt-16">
				<h1>Dataset: Systems</h1>
			</main>
		{/if}
		<div class="divider w-[50%] mx-auto" />
		<div class="prose text-justify mx-auto">
			{#if parsedInfo && !parsedInfo.includes('404')}
				{@html parsedInfo}
				<div class="divider w-[50%] mx-auto" />
			{/if}
		</div>
	</div>
	<div id="leaderboard-header" transition:fade|local class="flex justify-center my-4">
		<div class="font-bold my-auto mx-20 text-2xl">
			{#if parsedTable == null}
				No Leaderboard for this dataset yet

				<div class="flex justify-center">
					<button
						on:click={() => {
							toggleDialog(`add-new-leaderboard-${$page.params.db}/${$page.params.dataset}`);
						}}
						class="btn btn-accent btn-wide"
					>
						Submit a new leaderboard
					</button>
				</div>
			{:else}
				Leaderboard
			{/if}
		</div>
		{#if $currentPRChanges && $currentPRChanges.newLeaderboards.find((lb) => lb.dataset === `${$page.params.db}/${$page.params.dataset}`) != undefined}
			<div class="my-auto mx-4">
				<button
					on:click={() => {
						toggleDialog('delete-new-leaderboard-' + $page.params.db + '/' + $page.params.dataset);
					}}
					class="btn btn-warning"
				>
					Delete
				</button>
			</div>
		{/if}
		<div class="flex space-x-4">
			<input
				class:hidden={parsedTable == null}
				type="text"
				class="input input-primary input-sm w-60 my-auto"
				placeholder="Filter 🔎"
				name="filter"
				id="filter"
				bind:this={filter}
				on:input={(e) => {
					setTableFilter(e);
				}}
			/>
			<div class="text-xs my-auto text-gray-600">Double click on a row to see details</div>
		</div>
		{#if $currentPRChanges && $currentPRChanges.newColumns.find((col) => col.dataset === `${$page.params.db}/${$page.params.dataset}`) != undefined}
			<div class="mx-4 italic text-xs my-auto text-gray-400">
				Right click on your new column to delete it
			</div>
		{/if}
	</div>
{/if}
<div
	class:hidden={parsedTable == null || $currentTabulator == null}
	id="leaderboard-wrapper"
	class={`w-[80%] mx-auto ${fadeClass} flex`}
>
	<div class="overflow-x-scroll w-full">
		<div bind:this={table} />
	</div>
	<div class="mx-2 flex items-center justify-center bg-reg-400">
		<button on:click={openNewColumnDialog} class="btn btn-secondary h-full"> + </button>
	</div>
</div>
<div class:hidden={parsedTable == null} class={`my-2 w-[80%] mx-auto ${fadeClass}`}>
	<button on:click={openNewRowDialog} class="btn btn-primary w-full"> + </button>
</div>

<div class="prose text-justify mx-auto">
	{#if parsedFooter}
		{@html parsedFooter}
	{/if}
</div>
<div class="my-20" />
<svelte:head>
	<link
		href="https://unpkg.com/tabulator-tables@5.5.0/dist/css/tabulator_bootstrap5.min.css"
		rel="stylesheet"
	/>
</svelte:head>

<AddNewColumnDialog dataset={'systems'} />
<AddNewRowDialog dataset={'systems'} />
<AddNewLeaderboard dataset={'systems'} />
<AreYouSureDeleteLbDialog dataset={'systems'} />
<ShowRowDialog />

<style>
	.fade-in {
		animation: fadein 2s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	.w-80 {
		opacity: 0;
	}
</style>
