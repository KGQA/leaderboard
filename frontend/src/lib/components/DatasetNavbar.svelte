<script lang="ts">
	import { base } from '$app/paths';

	export let datasetName: string | null;
</script>

<nav class="my-4 flex w-[80%] mx-auto">
	<div class="text-center flex-1">
		{#if datasetName}
			◀️ Back to <a href={base + '/datasets/' + datasetName}>Overview</a>
		{/if}
	</div>
	<div class="">
		🏠 <a href={base}>Home</a>
	</div>
</nav>
