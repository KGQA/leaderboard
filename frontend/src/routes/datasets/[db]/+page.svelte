<script lang="ts">
	import { page } from '$app/stores';
	import KnowledgeGraphNavbar from '$lib/components/KnowledgeGraphNavbar.svelte';
	import { PUBLIC_REPO_URL } from '$lib/constants';
	import { getGitHubFilesInFolder, getRawGitHubContent } from '$lib/utils/githubUrlBuilder';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let content: string | undefined;
	let files: string[];

	async function load(params: any) {
		try {
			const githubUrl = getRawGitHubContent(PUBLIC_REPO_URL, `${params.db}/README.md`);

			const githubMarkdownTextReq = await fetch(githubUrl);
			const githubMarkdownText = await githubMarkdownTextReq.text();

			const htmlContent = marked.parse(githubMarkdownText, { mangle: false, headerIds: false });

			const rawFilesUrl = getGitHubFilesInFolder(`leaderboard`, `${params.db}`);
			const rawFilesReq = await fetch(rawFilesUrl);
			const rawFiles = await rawFilesReq.json();

			const files = rawFiles.map((file: { name: string }) => {
				file.name = file.name.replace('.md', '');
				return file.name == 'README' || file.name[0] == '^' || file.name[0] == '$'
					? undefined
					: file.name;
			});

			return {
				content: htmlContent,
				files: files
			};
		} catch (e) {
			return {
				status: 404
			};
		}
	}

	async function prepare() {
		const loadData = await load($page.params);
		content = loadData.content;
		files = loadData.files;
	}

	onMount(async () => {});
</script>

<KnowledgeGraphNavbar />
{#await prepare()}
	<div class="h-screen w-screen flex flex-col justify-center">
		<div class="flex justify-center">
			<span class="loading loading-infinity loading-lg text-primary" />
		</div>
	</div>
{:then}
	{#if content}
		<article transition:fade|local class="prose text-justify mx-auto my-8">
			{@html content}
		</article>
	{/if}

	{#if files}
		<div transition:fade|local class="flex justify-center">
			<ul class="list list-decimal">
				{#each files as file}
					{#if file}
						<li>
							<a href={$page.url.pathname + '/' + file}>{file}</a>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
	{/if}
{:catch error}
	<div>
		Something went wrong while loading the data: {error.message}
	</div>
{/await}
