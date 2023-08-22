import { writable } from 'svelte/store';
import type { Tabulator } from 'tabulator-tables';

export const currentTabulator = writable<Tabulator | null>(null);
