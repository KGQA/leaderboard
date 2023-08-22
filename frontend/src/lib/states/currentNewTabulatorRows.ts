import { writable } from 'svelte/store';
import type { RowComponent } from 'tabulator-tables';

export const currentNewTabulatorRows = writable<RowComponent[]>([]);
