import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import fs from 'fs';
import readline from 'readline';
import preprocess from 'svelte-preprocess';

async function getEntriesFromTxtFile(relativePath) {
	let entries = [];
	const path = new URL(relativePath, import.meta.url).pathname;
	const fileStream = fs.createReadStream(path);
	const rl = readline.createInterface({
		input: fileStream,
		crlfDelay: Infinity
	});
	for await (const line of rl) {
		entries.push(line);
	}

	return entries;
}
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({}),
		prerender: {
			entries: await getEntriesFromTxtFile('./static/entries.txt')
		},
		paths: {
			base: '/leaderboard',
			relative: false
		}
	}
};

export default config;
