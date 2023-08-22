<script lang="ts">
	import { page } from '$app/stores';
	import { type NewPR, currentPRChanges } from '$lib/currentPRChanges';
	import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';
	import { currentlySelectedRow } from '$lib/states/currentlySelectedRow';
	import { onMount } from 'svelte';
	import type { RowComponent } from 'tabulator-tables';

	import { toggleDialog } from './dialogUtils';

	const dataset = $page.params.db + '/' + $page.params.dataset;
</script>

<dialog id="show-row-dialog" class="modal">
	<form method="dialog" class="modal-box w-11/12 max-w-5xl">
		<div class="text-lg font-bold my-2">Details</div>
		<div class="grid grid-cols-2">
			{#if $currentlySelectedRow}
				{#each $currentlySelectedRow.getCells() as cell}
					{#if cell.getColumn().getField() !== 'id'}
						<div class="">
							{cell.getColumn().getField()}
						</div>
						<div>
							{@html cell.getValue()}
						</div>
					{/if}
				{/each}
			{/if}
		</div>

		<div class="modal-action">
			{#if $currentNewTabulatorRows.length > 0 && $currentNewTabulatorRows.find((row) => row === $currentlySelectedRow)}
				<button
					on:click|preventDefault={() => {
						toggleDialog('are-you-sure-delete-row');
						toggleDialog('show-row-dialog');
					}}
					class="btn btn-error"
				>
					Delete
				</button>
			{/if}
			<!-- if there is a button, it will close the modal -->
			<button class="btn">Close</button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<dialog id="are-you-sure-delete-row" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">Are you sure you want to delete this row?</p>
		<div class="flex space-x-4 justify-center">
			<button
				on:click={() => {
					if ($currentPRChanges != null) {
						console.log('Deleting row from current PR changes');
						$currentPRChanges.newRows = $currentPRChanges?.newRows.filter(
							(row) => row.row !== $currentlySelectedRow
						);
						$currentPRChanges.lastChange = 'row';
						$currentPRChanges = $currentPRChanges;
						$currentNewTabulatorRows = $currentNewTabulatorRows.filter(
							(row) => row !== $currentlySelectedRow
						);
						$currentlySelectedRow?.delete();
					}
				}}
				class="btn btn-success"
			>
				Yes
			</button>
			<button class="btn btn-secondary"> No </button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
