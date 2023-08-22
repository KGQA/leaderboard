import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
	// Recording...
	await page.goto('/');
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
	await page.getByRole('button', { name: '+' }).nth(1).click();
	await page.getByPlaceholder('Model / System').fill('Testmodel1');
	await page.getByPlaceholder('Year').click();
	await page.getByPlaceholder('Year').fill('2022');
	await page.getByPlaceholder('Reported by').click();
	await page.getByPlaceholder('Reported by').fill('Me');
	await page.getByPlaceholder('Average F1').click();
	await page.getByPlaceholder('Average F1').fill('100');
	await page.getByRole('button', { name: 'Add Row' }).click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByRole('button', { name: '+' }).nth(1).click();
	await page.getByPlaceholder('Model / System').click();
	await page.getByPlaceholder('Model / System').dblclick();
	await page.getByPlaceholder('Model / System').fill('Testmodel2');
	await page.getByRole('button', { name: 'Add Row' }).click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('Testmodel');
	await page.getByRole('gridcell', { name: 'Testmodel1' }).click();
	await page.getByRole('gridcell', { name: 'Testmodel2' }).click();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByRole('button', { name: 'Undo' }).first().click();
	await page.getByRole('button', { name: 'Undo' }).first().click();
	await expect(page.getByRole('gridcell', { name: 'Testmodel1' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '2022' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Me' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '100' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Testmodel2' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '2022' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: 'Me' })).not.toBeVisible();
	await expect(page.getByRole('gridcell', { name: '100' })).not.toBeVisible();
});
