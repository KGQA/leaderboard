import { test, expect } from '@playwright/test';

test('add new column and then new row', async ({ page }) => {
	// Recording...
	await page.goto('/');
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
	await page.locator('#leaderboard-wrapper').getByRole('button', { name: '+' }).click();
	await page.getByRole('heading', { name: 'New Column' }).click();
	await page.getByPlaceholder('Column Name').click();
	await page.getByPlaceholder('Column Name').fill('TestColumn');
	await page.locator('[id="column-numerical-freebase\\/ComplexQuestions"]').check();
	await page.getByRole('button', { name: 'Add Column' }).click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByRole('heading', { name: 'Are you sure?' })
		.click();
	await page.getByText('TestColumn').click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByText('freebase/ComplexQuestions')
		.click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByRole('heading', { name: 'Your Changes' }).click();
	await page.getByText('freebase/ComplexQuestions - TestColumn - Numerical Undo').click();
	await page.locator('#your-changes-dialog').press('Escape');
	await page.locator('#leaderboard-wrapper').getByText('TestColumn').click();
	await page.locator('#leaderboard-wrapper').getByText('TestColumn').click();
	await page.getByText('Right click on your new column to delete it').click();
	await page.getByRole('button', { name: '+' }).nth(1).click();
	await page.getByRole('heading', { name: 'New Row' }).click();
	await page
		.locator('[id="add-new-row-freebase\\/ComplexQuestions"]')
		.getByText('freebase/ComplexQuestions')
		.click();
	await page.getByPlaceholder('Model / System').click();
	await page.getByPlaceholder('Model / System').fill('TestModel123');
	await page.getByPlaceholder('Model / System').press('Tab');
	await page.getByPlaceholder('Year').fill('2022');
	await page.getByPlaceholder('Year').press('Tab');
	await page.getByPlaceholder('Reported by').fill('Me');
	await page.getByPlaceholder('Average F1').click();
	await page.getByPlaceholder('Average F1').fill('100');
	await page.getByPlaceholder('TestColumn').click();
	await page.getByPlaceholder('TestColumn').fill('TestColumnValue');
	await page.getByRole('button', { name: 'Add Row' }).click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('heading', { name: 'Are you sure?' })
		.click();
	await page.getByText('Model / System: TestModel123').click();
	await page.getByText('Year: 2022').click();
	await page.getByText('Reported by: Me').click();
	await page.getByText('Average F1: 100').click();
	await page.getByText('TestColumn: TestColumnValue').click();
	await page
		.locator('[id="are-you-sure-row-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('TestModel123');
	await page.getByRole('gridcell', { name: 'TestModel123' }).click();
	await page.getByRole('gridcell', { name: '2022' }).click();
	await page.getByRole('gridcell', { name: 'Me' }).click();
	await page.getByRole('gridcell', { name: '100' }).click();
	await page.getByRole('gridcell', { name: 'TestColumnValue' }).click();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByRole('button', { name: 'Expand' }).first().click();
	await page.getByLabel('Row').getByText('TestModel123').click();
	await page.getByLabel('Row').getByText('2022').click();
	await page.getByLabel('Row').getByText('Me').click();
	await page.getByLabel('Row').getByText('100').click();
	await page.getByLabel('Row').getByText('TestColumnValue').click();
	await page.getByRole('button', { name: 'OK' }).click();
	await page.getByRole('button', { name: 'Expand' }).first().press('Escape');
	await page.goto('leaderboard/datasets/freebase/ComplexQuestions');
	await page.getByPlaceholder('Filter 🔎').click();
	await page.getByPlaceholder('Filter 🔎').fill('TestColumnValue');
	await page.getByRole('gridcell', { name: 'TestModel123' }).click();
	await page.getByRole('gridcell', { name: '2022' }).click();
	await page.getByRole('gridcell', { name: 'Me' }).click();
	await page.getByRole('gridcell', { name: '100' }).click();
	await page.getByRole('gridcell', { name: 'TestColumnValue' }).click();
});
