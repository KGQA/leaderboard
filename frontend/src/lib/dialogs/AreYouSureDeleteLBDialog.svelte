<script lang="ts">
	import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError, notifySuccess } from '$lib/notifications';
	import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';

	export let dataset: string;
</script>

<dialog id="delete-new-leaderboard-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">Are you sure you want to delete your newly added dataset?</p>
		<div class="flex justify-between">
			<button
				on:click={() => {
					console.log('Deleting leaderboard');
					if (!$currentPRChanges) {
						notifyError('No current PR changes', 'Please refresh the page and try again');
						return;
					}
					let copy = structuredClone($currentPRChanges);
					copy.newLeaderboards = $currentPRChanges.newLeaderboards.filter((lb) => {
						return lb.dataset !== dataset;
					});
					copy.lastChange = 'leaderboard deleted';
					currentPRChanges.set(copy);
					// reload the window
					window.location.reload();
				}}
				class="btn btn-sm btn-warning"
			>
				Yes
			</button>
			<button class="btn btn-sm btn-secondary"> No </button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>
