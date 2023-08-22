import { writable } from 'svelte/store';
import type { CellComponent, RowComponent } from 'tabulator-tables';

export const currentlySelectedRow = writable<null | RowComponent>(null);
