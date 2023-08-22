<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import DatasetNavbar from '$lib/components/DatasetNavbar.svelte';
	import { currentPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import AddNewColumnDialog from '$lib/dialogs/AddNewColumnDialog.svelte';
	import AddNewLeaderboard from '$lib/dialogs/AddNewLeaderboard.svelte';
	import AddNewRowDialog from '$lib/dialogs/AddNewRowDialog.svelte';
	import AreYouSureDeleteLbDialog from '$lib/dialogs/AreYouSureDeleteLBDialog.svelte';
	import ShowRowDialog from '$lib/dialogs/ShowRowDialog.svelte';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError } from '$lib/notifications';
	import { tableBuilding } from '$lib/states/tableBuilding';
	import { tableBuilt } from '$lib/states/tableBuilt';
	import * as htmlToJson from '$lib/utils/htmlToJson';
	import {
		addNewColumnToTable,
		extendColumnsByParsedTable,
		getBaseColumns,
		load,
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
		const loadData = await load($page.params);
		parsedTable = loadData.parsedTable;
		prefaceData = loadData.prefaceData;
		parsedInfo = loadData.parsedInfo;
		parsedFooter = loadData.parsedFooter;

		fadeClass = 'fade-in';
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
			// check cookie for table data
			if ($currentPRChanges) {
				let changes = $currentPRChanges;
				let doesLeaderboardExist = changes.newLeaderboards.find((lb) => {
					return lb.dataset == $page.params.db + '/' + $page.params.dataset;
				});
				if (!doesLeaderboardExist) {
					notifyError('No leaderboard found', 'There is no leaderboard for this dataset');
					loading = false;
					tableBuilding.set(false);
					tableBuilt.set(false);
					return;
				} else {
					console.log('Leaderboard found in pr changes cookie');
				}
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
				loading = false;
			} else console.log('No table found');
		}
		loading = false;
	});

	function openNewColumnDialog() {
		toggleDialog(`add-new-column-${$page.params.db}/${$page.params.dataset}`);
	}

	function openNewRowDialog() {
		toggleDialog(`add-new-row-${$page.params.db}/${$page.params.dataset}`);
	}

	currentPRChanges.subscribe((changes) => {
		if (changes) {
			console.log('Changes detected', changes);
			if (changes.lastChange === 'leaderboard added') {
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
			if (browser) {
				storeToLocalStorage(changes);
			}
			if ($tableBuilt && !$tableBuilding) $currentTabulator?.redraw(true);
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
		<DatasetNavbar datasetName={$page.params.db} />
		{#if prefaceData && parsedTable}
			<main class="prose text-justify mx-auto mt-16">
				<h1>Dataset: {prefaceData.name}</h1>
				<h5>Dataset URL: <a href={prefaceData.datasetUrl}>Link</a></h5>
			</main>
		{/if}
		<div class="divider w-[50%] mx-auto" />
		<div class="prose text-justify mx-auto">
			{#if parsedInfo}
				{@html parsedInfo}
			{/if}
		</div>
	</div>
	<div class="divider w-[50%] mx-auto" />
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
		{#if $currentPRChanges && $currentPRChanges.newColumns.find((col) => col.dataset === `${$page.params.db}/${$page.params.dataset}`) != undefined}
			<div class="mx-4 italic text-xs my-auto text-gray-400">
				Right click on your new column to delete it
			</div>
		{/if}
	</div>
{/if}
<div
	class:hidden={parsedTable == null}
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

<AddNewColumnDialog dataset={$page.params.db + '/' + $page.params.dataset} />
<AddNewRowDialog dataset={$page.params.db + '/' + $page.params.dataset} />
<AddNewLeaderboard dataset={$page.params.db + '/' + $page.params.dataset} />
<AreYouSureDeleteLbDialog dataset={$page.params.db + '/' + $page.params.dataset} />
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
