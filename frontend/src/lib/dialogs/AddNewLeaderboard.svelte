<script lang="ts">
	import { currentPRChanges, initPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError, notifySuccess } from '$lib/notifications';
	import { currentNewTabulatorRows } from '$lib/states/currentNewTabulatorRows';

	export let dataset: string;
	let leaderboardData: string;
</script>

<dialog id="add-new-leaderboard-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">New Leaderboard</h3>
		<p class="py-4">Please paste your leaderboard table</p>
		<div class="w-full flex">
			<textarea
				name=""
				bind:value={leaderboardData}
				id="new-leaderboard-{dataset}"
				class="textarea textarea-primary w-full"
			/>
		</div>
		<div class="flex justify-center my-8">
			<button
				on:click|preventDefault={() => {
					toggleDialog(`are-you-sure-leaderboard-${dataset}`);
				}}
				class="btn btn-primary btn-sm">Add Leaderboard</button
			>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<dialog id="are-you-sure-leaderboard-{dataset}" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">
			You are about to add a new leaderboard for <span class="text-primary">{dataset}</span>.
		</p>

		<div class="flex justify-center space-x-4">
			<button
				on:click={async () => {
					toggleDialog(`add-new-leaderboard-${dataset}`);
					toggleDialog(`are-you-sure-leaderboard-${dataset}`);

					try {
						console.log('leaderboardData', leaderboardData);
						if (
							leaderboardData == null ||
							leaderboardData == undefined ||
							leaderboardData.length === 0
						) {
							console.log('leaderboardData is empty');
							throw new Error('Leaderboard data is empty');
						}
						if (!$currentPRChanges) {
							$currentPRChanges = initPRChanges();
						}
						$currentPRChanges.newLeaderboards.push({
							dataset: dataset,
							data: leaderboardData
						});
						$currentPRChanges.lastChange = 'leaderboard added';
					} catch (e) {
						notifyError(
							'Error adding new leaderboard',
							`Error adding new leaderboard for dataset ${dataset}: ${e}`
						);
						return;
					}

					notifySuccess(
						'New leaderboard added successfully!',
						`Added new leaderboard to dataset ${dataset}`
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
