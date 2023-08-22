import { writable } from 'svelte/store';
import type { CellComponent, RowComponent } from 'tabulator-tables';

export type NewColumn = {
	dataset: string;
	column: string;
	numerical: boolean;
};

export type NewRow = {
	dataset: string;
	row: any;
};

export type ChangedRow = {
	dataset: string;
	row: any;
};

export type Leaderboard = {
	dataset: string;
	data: string;
};

export type NewPR = {
	newColumns: NewColumn[];
	newRows: NewRow[];
	changedRows: ChangedRow[];
	newLeaderboards: Leaderboard[];
	lastChange:
		| 'column added'
		| 'column deleted'
		| 'row added'
		| 'row deleted'
		| 'row reverted'
		| 'cell'
		| 'leaderboard added'
		| 'leaderboard deleted'
		| null;
};

export const currentPRChanges = writable<NewPR | null>(null);

export function initPRChanges() {
	return {
		newColumns: [],
		newRows: [],
		changedRows: [],
		newLeaderboards: [],
		lastChange: null
	} as NewPR;
}
