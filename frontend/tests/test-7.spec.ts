import { test, expect } from '@playwright/test';

test('add and remove row', async ({ page }) => {
	// Recording...
	await page.goto('/');
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
	await page.getByRole('button', { name: '+' }).nth(1).click();
	await page.getByPlaceholder('Model / System').fill('TestModel');
	await page.getByPlaceholder('Model / System').press('Tab');
	await page.getByPlaceholder('Year').fill('2022');
	await page.getByPlaceholder('Year').press('Tab');
	await page.getByPlaceholder('Reported by').fill('Me');
	await page.getByPlaceholder('Reported by').press('Tab');
	await page.getByPlaceholder('Average F1').fill('100');
	await page.getByRole('button', { name: 'Add Row' }).click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('TestModel');
	await page.getByRole('gridcell', { name: 'TestModel' }).click();
	await page.locator('body').click();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByRole('button', { name: 'Undo' }).click();
	await page.getByPlaceholder('Filter 🔎').click({
		clickCount: 3
	});
	await page.getByPlaceholder('Filter 🔎').fill('TestModel');
	await expect(page.getByRole('gridcell', { name: 'TestModel' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '2022' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Me' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '100' })).not.toBeVisible();
});
