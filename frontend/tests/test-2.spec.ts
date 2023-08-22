import { test, expect } from '@playwright/test';

test('add new column', async ({ page }) => {
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
	await page.getByText('(numerical value)').click();
	await page
		.getByText('You want to add a column named Test (numerical value) to the dataset freebase/Co')
		.click();
	await page
		.locator('[id="are-you-sure-freebase\\/ComplexQuestions"]')
		.getByRole('button', { name: 'Yes' })
		.click();
	await page.getByRole('columnheader', { name: 'Test' }).locator('div').first().click();
	await page.locator('#leaderboard-wrapper').getByText('Test').click();
	await page.getByRole('button', { name: 'Your Changes' }).click();
	await page.getByText('freebase/ComplexQuestions - Test - Numerical Undo').click();
	await page.getByRole('button', { name: 'Your Changes' }).press('Escape');
	await page.getByRole('button', { name: 'Your Changes' }).press('Escape');
	await page.goto('/leaderboard/datasets/freebase/ComplexQuestions');
	await page.locator('#leaderboard-wrapper').getByText('Test').click();
	await page.locator('body').click();
});
