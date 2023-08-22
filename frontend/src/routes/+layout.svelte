<script>
	import { currentPRChanges } from '$lib/currentPRChanges';
	import { fade } from 'svelte/transition';
	import '../app.postcss';
	import { toggleDialog } from '$lib/dialogs/dialogUtils';
	import CurrentChanges from '$lib/components/CurrentChanges.svelte';
	import 'animate.css';
	import { onMount } from 'svelte';

	onMount(() => {
		// check if "pr-changes" cookie exists and if yes store it
		let data = localStorage.getItem('pr-changes');
		if (data) {
			console.log("Found 'pr-changes' cookie, setting currentPRChanges");
			let parsedData = JSON.parse(data);
			parsedData.lastChange = null;
			currentPRChanges.set(parsedData);
		}
	});
</script>

<div class="fixed top-10 right-10">
	{#if $currentPRChanges && ($currentPRChanges.newColumns.length > 0 || $currentPRChanges.newRows.length > 0 || $currentPRChanges.newLeaderboards.length > 0 || $currentPRChanges.changedRows.length > 0)}
		<button
			transition:fade
			on:click={() => {
				toggleDialog(`your-changes-dialog`);
			}}
			class="btn">Your Changes</button
		>
	{/if}
</div>

<slot />
<CurrentChanges />
