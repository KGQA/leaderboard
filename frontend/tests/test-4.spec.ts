import { test, expect } from '@playwright/test';

test('add new row', async ({ page }) => {
	// Recording...
	await page.goto('/');
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('heading', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
	await page.getByRole('button', { name: '+' }).nth(1).click();
	await page.getByPlaceholder('Model / System').fill('TestModel123');
	await page.getByPlaceholder('Year').click();
	await page.getByPlaceholder('Year').fill('2022');
	await page.getByPlaceholder('Reported by').click();
	await page.getByPlaceholder('Reported by').fill('Me');
	await page.getByPlaceholder('Reported by').press('Tab');
	await page.getByPlaceholder('Average F1').fill('100');
	await page.getByRole('button', { name: 'Add Row' }).click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('heading', { name: 'Are you sure?' })
		.click();
	await page.getByText('Model / System: TestModel123').click();
	await page.getByText('Year: 2022').click();
	await page.getByText('Reported by: Me').click();
	await page.getByText('Average F1: 100').click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByText('Added row to dataset freebase/ComplexQuestions').click();
	await page.getByRole('heading', { name: 'New row added successfully!' }).click();
	await page.locator('body').hover();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByText('Expand').click();
	await expect(page.getByLabel('Row').getByText('TestModel123')).toBeVisible();
	await expect(page.getByLabel('Row').getByText('2022')).toBeVisible();
	await expect(page.getByLabel('Row').getByText('Me')).toBeVisible();
	await expect(page.getByLabel('Row').getByText('100')).toBeVisible();
	await page.getByRole('button', { name: 'OK' }).click();
	await page.getByRole('button', { name: 'Expand' }).press('Escape');
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByRole('button', { name: 'Discard all changes' }).press('Escape');
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('TestModel123');
	await expect(page.getByRole('gridcell', { name: 'TestModel123' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: '2022' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Me' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: '100' })).toBeVisible();
	await page.goto('leaderboard/datasets/freebase/ComplexQuestions');
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('TestModel123');
	await expect(page.getByRole('gridcell', { name: 'TestModel123' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: '2022' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Me' })).toBeVisible();
	await expect(page.getByRole('gridcell', { name: '100' })).toBeVisible();
});
