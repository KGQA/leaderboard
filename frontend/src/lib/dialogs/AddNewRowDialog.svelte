<script lang="ts">
	import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError, notifySuccess } from '$lib/notifications';
	import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';
	import { onMount } from 'svelte';
	import type { Tabulator } from 'tabulator-tables';

	export let dataset: string;

	let newRowName: string = '';
	let newRowNumerical: boolean = false;

	let currentColumns: any[] = [];

	currentTabulator.subscribe((tabulator) => {
		if (tabulator) {
			currentColumns = tabulator.getColumns();
		}
	});

	let currentColumnInputs: any[] = [];
</script>

<dialog id="add-new-row-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">New Row</h3>
		<p class="py-4">
			Please enter the fields for the new row you want to add to the dataset <span
				class="text-primary">{dataset}</span
			>.
		</p>

		<div class="grid grid-cols-2 gap-x-4 gap-y-2">
			{#each currentColumns as column}
				{#if column.getField() !== 'id'}
					<div class="text-xs">{column.getField()}</div>
					<input
						type="text"
						class="input input-primary input-sm w-full"
						placeholder={column.getField()}
						name="row-name-{column.getField()}"
						id="row-name-{column.getField()}"
						on:input={(e) => {
							currentColumnInputs[column.getField()] = e.target.value;
						}}
					/>
				{/if}
			{/each}
		</div>

		<div class="flex justify-center my-8">
			<button
				on:click|preventDefault={() => {
					currentColumns.forEach((column) => {
						if (column.getField() !== 'id') {
							if (currentColumnInputs[column.getField()] === undefined) {
								currentColumnInputs[column.getField()] = '-';
							}
						}
					});

					toggleDialog(`are-you-sure-row-${dataset}`);
				}}
				class="btn btn-primary btn-sm">Add Row</button
			>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<dialog id="are-you-sure-row-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">
			You are about to add a new row to the dataset <span class="text-primary">{dataset}</span> with
			the following fields:
		</p>
		<ul class="list-disc list-inside">
			{#each currentColumns as column}
				{#if column.getField() !== 'id'}
					<li>
						{column.getField()}: {currentColumnInputs[column.getField()]}
					</li>
				{/if}
			{/each}
		</ul>

		<div class="flex justify-center space-x-4">
			<button
				on:click={async () => {
					toggleDialog(`add-new-row-${dataset}`);
					toggleDialog(`are-you-sure-row-${dataset}`);

					// loop over the keys
					let newRowToAdd = {};
					currentColumns.forEach((col) => {
						newRowToAdd[col.getField()] = currentColumnInputs[col.getField()];
					});
					let existingRows = $currentTabulator?.getRows() ?? [];
					newRowToAdd['id'] = existingRows.length;
					console.log('Attempting to add new row', newRowToAdd);
					let newTabulatorRow = await $currentTabulator?.addRow(newRowToAdd);
					if (!newTabulatorRow) {
						notifyError('Error adding new row!', `Error adding new row to dataset ${dataset}`);
						return;
					}
					if (!$currentPRChanges) $currentPRChanges = initPRChanges();
					$currentPRChanges.newRows.push({
						dataset: dataset,
						row: newTabulatorRow.getData()
					});
					$currentNewTabulatorRows.push(newTabulatorRow);
					$currentPRChanges.lastChange = 'row added';
					notifySuccess(
						'New row added successfully!',
						`Added row ${newRowName} to dataset ${dataset}`
					);
				}}
				class="btn btn-success btn-xs"
			>
				Yes
			</button>
			<button class="btn btn-error btn-xs"> No </button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
