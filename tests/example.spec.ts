import { test, expect } from '@playwright/test';

test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('google url load demo', async ({ page }) => {
  await page.goto('https://www.google.com/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Gmail')).toBeVisible();
});

test('youtube load demo', async ({ page }) => {
  await page.goto('https://www.google.com/');
  //await page.waitForTimeout(20);

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByText('Images')).toBeVisible();
});

test('Google gmail text display', async ({ page }) => {

  await page.goto('https://www.google.com/');

  // Expect that the page contains a visible element with text 'Gmail'
  await expect(page.locator('text=Gmail')).toBeVisible();
});

