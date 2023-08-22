<script lang="ts">
	import { page } from '$app/stores';
	import { GITHUB_BOT_URL } from '$lib/constants';
	import { currentPRChanges } from '$lib/currentPRChanges';
	import { currentTabulator } from '$lib/currentTabulator';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import { notifyError, notifySuccess } from '$lib/notifications';
	import { lastParsedTable } from '$lib/states/lastParsedTable';
	import { stringify } from 'gray-matter';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Swal from 'sweetalert2';

	let dialogElement: HTMLDialogElement;

	let serializedPR: any;
	let previouslySubmittedIssues: string[] = [];
	async function showRow(row: any) {
		let tempRow = JSON.parse(JSON.stringify(row));
		let keys = Object.keys(tempRow);
		let htmlContent = '';
		keys.forEach((key) => {
			if (key !== 'id') htmlContent += `<div>${key}</div> <div>${tempRow[key]}</div>`;
		});
		await Swal.fire({
			title: 'Row',
			html: `<div class="grid grid-cols-2">
												${htmlContent}</div>`.replace(/,/g, ''),
			target: dialogElement,
			showClass: {
				popup: 'animate__animated animate__fadeIn animate__faster'
			},
			hideClass: {
				popup: 'animate__animated animate__fadeOut animate__faster'
			},
			position: 'top'
		});
	}

	onMount(() => {
		previouslySubmittedIssues = JSON.parse(localStorage.getItem('pr-issues') ?? '[]') || [];
	});
</script>

<dialog bind:this={dialogElement} id="your-changes-dialog" class="modal">
	<form method="dialog" class="modal-box w-11/12 max-w-5xl">
		<div class="flex justify-between">
			<h3 class="font-bold text-lg">Your Changes</h3>

			<button
				on:click|preventDefault={() => {
					toggleDialog('are-you-sure-discard');
				}}
				class="btn btn-warning btn-sm"
			>
				Discard all changes
			</button>
		</div>

		{#if previouslySubmittedIssues && previouslySubmittedIssues.length > 0}
			<div>
				Previously Submitted Issues:
				<div>
					{#each previouslySubmittedIssues as issue}
						<div class="flex space-x-4">
							<div class="">
								<a href={issue}>{issue}</a>
							</div>
							<div>
								<button
									on:click|preventDefault={() => {
										previouslySubmittedIssues = previouslySubmittedIssues.filter(
											(i) => i !== issue
										);
										localStorage.setItem('pr-issues', JSON.stringify(previouslySubmittedIssues));
									}}
									class="btn btn-xs btn-primary btn-outline"
								>
									Discard
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
		<div>
			{#if $currentPRChanges}
				{#if $currentPRChanges.newRows.length > 0}
					<div class="my-10">
						New Rows:
						<ul>
							{#each $currentPRChanges.newRows as row}
								<li>
									{row.dataset} -
									<button
										on:click|preventDefault={async () => {
											showRow(row.row);
										}}
										class="btn btn-info btn-xs">Expand</button
									>
									<button
										on:click|preventDefault={() => {
											if ($currentPRChanges) {
												console.log('Deleting new row');
												if (
													row.dataset === $page.params.db + '/' + $page.params.dataset ||
													($page.route.id === '/systems' && row.dataset === 'systems')
												) {
													if ($currentTabulator !== null) {
														let rowToDelete = $currentTabulator.getRow(row.row.id);
														if (rowToDelete !== undefined) {
															console.log('Found row to delete', rowToDelete);
															$currentTabulator.deleteRow(rowToDelete);
															$currentTabulator.redraw(true);
															$currentTabulator = $currentTabulator;
														}
													}
												}
												$currentPRChanges.newRows = $currentPRChanges.newRows.filter(
													(r) => r !== row
												);

												$currentPRChanges.lastChange = 'row deleted';
												if (
													$currentPRChanges.changedRows.length === 0 &&
													$currentPRChanges.newRows.length === 0 &&
													$currentPRChanges.newColumns.length === 0 &&
													$currentPRChanges.newLeaderboards.length === 0
												) {
													toggleDialog('your-changes-dialog');
												}
											}
										}}
										class="btn btn-error btn-xs"
									>
										Undo
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				{#if $currentPRChanges.newColumns.length > 0}
					<div class="my-10">
						New Columns:
						<ul>
							{#each $currentPRChanges.newColumns as column}
								<li>
									{column.dataset} - {column.column} - {column.numerical
										? 'Numerical'
										: 'Non-Numerical'}
									<button
										on:click|preventDefault={() => {
											console.log('Deleting new column');
											if (
												column.dataset === $page.params.db + '/' + $page.params.dataset ||
												($page.route.id === '/systems' && column.dataset === 'systems')
											) {
												if ($currentTabulator !== null) {
													$currentTabulator.deleteColumn(column.column);
													$currentTabulator.redraw(true);
													$currentTabulator = $currentTabulator;
													if ($currentPRChanges !== null) {
														$currentPRChanges.newColumns = $currentPRChanges?.newColumns.filter(
															(c) => c !== column
														);
														$currentPRChanges.lastChange = 'column deleted';
													}
												}
											}
											if (
												$currentPRChanges?.changedRows.length === 0 &&
												$currentPRChanges?.newRows.length === 0 &&
												$currentPRChanges?.newColumns.length === 0 &&
												$currentPRChanges?.newLeaderboards.length === 0
											) {
												toggleDialog('your-changes-dialog');
											}
										}}
										class="btn btn-xs btn-error"
									>
										Undo
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if $currentPRChanges.changedRows.length > 0}
					<div class="my-10">
						Changed Rows:
						<ul>
							{#each $currentPRChanges.changedRows as changedRow}
								<li>
									{changedRow.dataset} -
									<button
										on:click|preventDefault={async () => {
											showRow(changedRow.row);
										}}
										class="btn btn-info btn-xs">Expand</button
									>
									<button
										on:click|preventDefault={() => {
											if ($currentPRChanges) {
												console.log('Deleting changed row');
												if (
													changedRow.dataset === $page.params.db + '/' + $page.params.dataset ||
													($page.route.id === '/systems' && changedRow.dataset === 'systems')
												) {
													if ($currentTabulator !== null) {
														let rowToRevert = $currentTabulator.getRow(changedRow.row.id);
														if (rowToRevert !== undefined) {
															console.log('Found row to revert');

															let originalRow = $lastParsedTable.find(
																(r) => r.id === rowToRevert.getIndex()
															);
															if (originalRow !== undefined) {
																console.log('Found original row', originalRow);
																$currentTabulator?.updateData([originalRow]);
																$currentTabulator.redraw(true);
																$currentTabulator = $currentTabulator;
															}
														}
													}
												}
												$currentPRChanges.changedRows = $currentPRChanges.changedRows.filter(
													(r) => r !== changedRow
												);
												$currentPRChanges.lastChange = 'row reverted';
												if (
													$currentPRChanges.changedRows.length === 0 &&
													$currentPRChanges.newRows.length === 0 &&
													$currentPRChanges.newColumns.length === 0 &&
													$currentPRChanges.newLeaderboards.length === 0
												) {
													toggleDialog('your-changes-dialog');
												}
											}
										}}
										class="btn btn-error btn-xs"
									>
										Undo
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
				{#if $currentPRChanges.newLeaderboards.length > 0}
					<div class="my-10">
						New Leaderboards:
						<ul>
							{#each $currentPRChanges.newLeaderboards as lb}
								<li>
									{lb.dataset} -
									<button
										on:click|preventDefault={async () => {
											await Swal.fire({
												title: 'New Table',
												html: `<div> ${lb.data} </div>`,
												target: dialogElement,
												showClass: {
													popup: 'animate__animated animate__fadeIn animate__faster'
												},
												hideClass: {
													popup: 'animate__animated animate__fadeOut animate__faster'
												},
												position: 'top'
											});
										}}
										class="btn btn-xs btn-info">Raw Table Data</button
									>
									<button
										on:click|preventDefault={() => {
											if ($currentPRChanges) {
												console.log('Deleting new leaderboard');
												if (lb.dataset === $page.params.db + '/' + $page.params.dataset) {
													$currentPRChanges.newLeaderboards =
														$currentPRChanges.newLeaderboards.filter((leaderboard) => {
															return leaderboard.dataset !== lb.dataset;
														});
													$currentPRChanges.lastChange = 'leaderboard deleted';
													// reload the window
													window.location.reload();
												} else {
													$currentPRChanges.newLeaderboards =
														$currentPRChanges.newLeaderboards.filter((leaderboard) => {
															return leaderboard.dataset !== lb.dataset;
														});
													$currentPRChanges.lastChange = 'leaderboard deleted';
												}
												if (
													$currentPRChanges.changedRows.length === 0 &&
													$currentPRChanges.newRows.length === 0 &&
													$currentPRChanges.newColumns.length === 0 &&
													$currentPRChanges.newLeaderboards.length === 0
												) {
													toggleDialog('your-changes-dialog');
												}
											}
										}}
										class="btn btn-xs btn-error"
									>
										Undo
									</button>
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			{/if}
		</div>
		<div class="flex justify-center">
			<button
				class="btn btn-primary"
				on:click={async () => {
					Swal.fire({
						title: 'Give a title to your changes',
						input: 'text',
						inputAttributes: {
							autocapitalize: 'off'
						},
						showCancelButton: true,
						confirmButtonText: 'Submit',
						showLoaderOnConfirm: true,
						preConfirm: (title) => {
							if (title === '') {
								Swal.showValidationMessage('Title cannot be empty');
							}
						},
						allowOutsideClick: () => !Swal.isLoading()
					}).then(async (result) => {
						if (result.isConfirmed) {
							serializedPR = {};
							serializedPR['newColumns'] = $currentPRChanges?.newColumns;
							serializedPR['newLeaderboards'] = $currentPRChanges?.newLeaderboards;
							serializedPR['newRows'] = [];
							serializedPR['changedRows'] = [];
							$currentPRChanges?.newRows?.forEach((row) => {
								console.log(row.row);
								serializedPR['newRows'].push({
									dataset: row.dataset,
									row: row.row
								});
							});
							$currentPRChanges?.changedRows?.forEach((row) => {
								console.log(row.row);
								serializedPR['changedRows'].push({
									dataset: row.dataset,
									row: row.row
								});
							});
							try {
								let req = await fetch(GITHUB_BOT_URL, {
									method: 'POST',
									headers: {
										'Content-Type': 'application/json'
									},
									body: JSON.stringify({
										title: result.value,
										newColumns: serializedPR['newColumns'],
										newRows: serializedPR['newRows'],
										changedRows: serializedPR['changedRows'],
										newLeaderboards: serializedPR['newLeaderboards']
									})
								});
								let res = await req.json();
								console.log(res);
								if (res.status === 'success') {
									notifySuccess(
										'Success',
										'Your changes have been submitted as an issue. You can track the progress of your changes on GitHub.'
									);

									let response = JSON.parse(res.response);
									let issueUrl = response.html_url;
									let previouslySubmittedIssuesFromStorage = localStorage.getItem('pr-issues');
									previouslySubmittedIssues = previouslySubmittedIssuesFromStorage
										? JSON.parse(previouslySubmittedIssuesFromStorage)
										: [];
									previouslySubmittedIssues.push(issueUrl);
									localStorage.setItem('pr-issues', JSON.stringify(previouslySubmittedIssues));
								} else {
									notifyError('Error', 'Something went wrong while submitting your changes.');
								}
							} catch (e) {
								notifyError('Error', 'Something went wrong while submitting your changes.');
							}
						}
					});
				}}
			>
				Submit
			</button>
		</div>
	</form>
	<form method="dialog" class="modal-backdrop">
		<button>close</button>
	</form>
</dialog>

<dialog id="are-you-sure-discard" class="modal">
	<form method="dialog" class="modal-box">
		<h3 class="font-bold text-lg">Are you sure?</h3>
		<p class="py-4">Do you want to discard <b>all</b> your changes? This cannot be undone.</p>
		<div class="flex justify-evenly">
			<button
				on:click={() => {
					localStorage.removeItem('pr-changes');
					window.location.reload();
				}}
				class="btn btn-sm btn-error"
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

<style>
	:root {
		--animate-duration: 0.1s;
	}
</style>
