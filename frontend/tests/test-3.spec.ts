import { test, expect } from '@playwright/test';

test('add new column and delete new column', async ({ page }) => {
	// Recording...
	await page.goto('/');
	await page.getByRole('link', { name: 'Freebase' }).click();
	await page.getByRole('heading', { name: 'Freebase' }).click();
	await page.getByRole('link', { name: 'ComplexQuestions' }).click();
	await page.getByRole('heading', { name: 'ComplexQuestions', exact: true }).click();
	await page.locator('#leaderboard-wrapper').getByRole('button', { name: '+' }).click();
	await page.getByRole('heading', { name: 'New Column' }).click();
	await page.getByPlaceholder('Column Name').click();
	await page.getByPlaceholder('Column Name').fill('Test');
	await page.locator('[id="column-numerical-freebase\\/ComplexQuestions"]').check();
	await page.getByRole('button', { name: 'Add Column' }).click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByRole('heading', { name: 'Are you sure?' })
		.click();
	await page
		.getByText('You want to add a column named Test (numerical value) to the dataset freebase/Co')
		.click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByText('freebase/ComplexQuestions')
		.click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByText('Added column Test to dataset freebase/ComplexQuestions').click();
	await page.locator('body').hover();
	await page.getByText('Right click on your new column to delete it').click();
	await page.locator('body').press('Escape');

	await page.locator('#leaderboard-wrapper').getByText('Test').click({ button: 'right' });
	await page.getByRole('button', { name: 'Delete column' }).click();
	await page.getByText('Column deleted successfully').click();
	await page.getByRole('heading', { name: 'Column deleted' }).click();
});
