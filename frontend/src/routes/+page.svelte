<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { PUBLIC_REPO_URL } from '$lib/constants';
	import { notifySuccess } from '$lib/notifications';
	import { getRawGitHubContent } from '$lib/utils/githubUrlBuilder';
	import Fuse from 'fuse.js';
	import matter from 'gray-matter';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let prefaceData: any;
	let content: string | undefined;

	let data: { dbName: string; url: string }[] = [];
	let fuse: Fuse<{ dbName: string; url: string }>;
	let searchResults: Fuse.FuseResult<{ dbName: string; url: string }>[];

	async function load() {
		try {
			const githubUrl = getRawGitHubContent(PUBLIC_REPO_URL, 'README.md');

			const githubMarkdownTextReq = await fetch(githubUrl);
			const githubMarkdownText = await githubMarkdownTextReq.text();
			const parsed = matter(githubMarkdownText);

			const htmlContent = marked.parse(parsed.content, { mangle: false, headerIds: false });

			const prefaceData = {
				knowledgeGraphs: parsed.data.knowledgeGraphs
			};

			return {
				prefaceData: prefaceData,
				content: htmlContent
			};
		} catch (e) {
			throw new Error(`Failed to load, error ${e}`);
		}
	}

	onMount(async () => {
		const loadedData = await load();
		prefaceData = loadedData.prefaceData;
		content = loadedData.content;
		const res = await fetch(base + '/entries.txt');
		let entries: string[] = [];
		if (res.ok) {
			const text = await res.text();
			entries = text.split('\n');
		}
		for (let i = 0; i < entries.length; i++) {
			let url = entries[i].slice(1);
			let splitted = url.split('/');
			let dbName = splitted[splitted.length - 1];
			if (dbName && url) {
				data.push({
					dbName: dbName,
					url: url
				});
			}
		}
		fuse = new Fuse(data, options);
	});

	const options = {
		// isCaseSensitive: false,
		// includeScore: false,
		// shouldSort: true,
		// includeMatches: false,
		// findAllMatches: false,
		minMatchCharLength: 1,
		location: 0,
		threshold: 0.1,
		// distance: 100,
		// useExtendedSearch: false,
		// ignoreLocation: false,
		// ignoreFieldNorm: false,
		// fieldNormWeight: 1,
		keys: ['dbName']
	};

	function search(event: Event) {
		const target = event.target as HTMLInputElement;
		const value = target.value;
		if (value) {
			searchResults = fuse.search(value);
		} else {
			searchResults = [];
		}
	}
	let filterValue = '';
</script>

<div class="flex justify-center mt-12">
	<img src="{base}/logo-min.png" alt="The wisest koala" class="w-64 my-auto" />
</div>
<div class="text-center mt-4 text-5xl">KGQA Leaderboard</div>
<div class="flex justify-center">
	<button
		on:click={() => {
			let citation =
				'[Knowledge Graph Question Answering Leaderboard: A Community Resource to Prevent a Replication Crisis](https://aclanthology.org/2022.lrec-1.321) (Perevalov et al., LREC 2022)';

			navigator.clipboard.writeText(citation);
			notifySuccess('Copied!', 'Citation copied to clipboard');
		}}
		class="btn btn-secondary btn-sm btn-wide mb-12"
	>
		Copy Citation
	</button>
</div>

<div class="flex justify-center">
	<input
		type="text"
		class="input input-primary input-sm md:w-[25%] w-11/12"
		placeholder="Search Datasets 🔎"
		name="filter"
		id="filter"
		on:input={search}
		bind:value={filterValue}
	/>
</div>

<div
	class:hidden={!searchResults || searchResults.length === 0}
	class="flex justify-center my-2 border border-opacity-10 border-accent w-[70%] mx-auto rounded-xl"
>
	<div>
		{#if searchResults}
			{#each searchResults as result}
				<div class="flex justify-center">
					<a href={base + '/' + result.item.url}>
						{#each result.item.dbName as letter}
							{#if filterValue.toLowerCase().includes(letter.toLowerCase())}
								<span class="text-info">{letter}</span>
							{:else}
								{letter}
							{/if}
						{/each}
					</a>
				</div>
			{/each}
		{/if}
	</div>
</div>
<div class="w-[70%] mx-auto divider">Or select Knowledge Graph from the list below</div>
{#if prefaceData}
	<div transition:fade|local class="flex justify-center space-x-4">
		{#each prefaceData.knowledgeGraphs as kg}
			{#if kg}
				<a href={base + '/datasets/' + kg.toLowerCase()}>{kg}</a>
			{/if}
		{/each}
	</div>
{/if}
<div class="flex justify-center my-2">
	<button
		on:click={() => {
			window.location.href = base + '/systems';
		}}
		class="btn btn-accent"
	>
		Systems
	</button>
</div>
<div class="my-10" />
{#if content}
	<div class="flex justify-center">
		<div class="prose text-justify mx-auto w-[95%]">
			{@html content}
		</div>
	</div>
{/if}
