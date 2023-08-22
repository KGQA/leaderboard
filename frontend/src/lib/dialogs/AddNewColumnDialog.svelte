<script lang="ts">
	import { page } from '$app/stores';
	import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifySuccess } from '$lib/notifications';
	import { addNewColumnToTable } from '$lib/utils/utils';

	export let dataset: string;

	let newColumnName: string = '';
	let newColumnNumerical: boolean = false;
</script>

<dialog id="add-new-column-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">New Column</h3>
		<p class="py-4">Please enter the name of the new column you want to add to the dataset.</p>

		<div class="grid grid-cols-4 gap-x-4">
			<div class="flex flex-col col-span-3 space-y-2">
				<div class="text-xs">Column Name</div>
				<input
					type="text"
					class="input input-primary input-sm w-full"
					placeholder="Column Name"
					name="column-name-{dataset}"
					id="column-name-{dataset}"
					bind:value={newColumnName}
				/>
			</div>
			<div class="flex flex-col space-y-2">
				<div class="text-xs text-center">Is Numerical?</div>
				<input
					type="checkbox"
					name="column-numerical-{dataset}"
					id="column-numerical-{dataset}"
					class="checkbox checkbox-primary my-auto mx-auto"
					bind:checked={newColumnNumerical}
				/>
			</div>
		</div>

		<div class="flex justify-center my-8">
			<button
				on:click|preventDefault={() => {
					toggleDialog(`are-you-sure-${dataset}`);
				}}
				class="btn btn-primary btn-sm">Add Column</button
			>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<dialog id="are-you-sure-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">
			You want to add a column named <span class="text-primary">{newColumnName}</span>
			{#if newColumnNumerical}
				<span class="text-primary">(numerical value)</span>
			{:else}
				of type <span class="text-primary">(non-numerical value)</span>
			{/if}

			to the dataset <span class="text-primary">{dataset}</span>?
		</p>
		<div class="flex justify-center space-x-4">
			<button
				on:click={() => {
					console.log('Adding new column to dataset', dataset, newColumnName, newColumnNumerical);
					toggleDialog(`add-new-column-${dataset}`);
					toggleDialog(`are-you-sure-${dataset}`);
					if (!$currentPRChanges) $currentPRChanges = initPRChanges();
					let lastColumn = {
						dataset: dataset,
						column: newColumnName,
						numerical: newColumnNumerical
					};
					$currentPRChanges.newColumns.push(lastColumn);
					$currentPRChanges.lastChange = 'column added';
					addNewColumnToTable(lastColumn, $page);
					notifySuccess(
						'New column added successfully!',
						`Added column ${newColumnName} to dataset ${dataset}`
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
