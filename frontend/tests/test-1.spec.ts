import { test, expect } from '@playwright/test';

test('base test', async ({ page }) => {
	// Recording...
	await page.goto('/');

	await page.getByText('KGQA Leaderboard').click();
	await page.getByText('KGQA Leaderboard').click();
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('heading', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
});
