import { test, expect } from '@playwright/test';


test('Verify playwright demo page with input search', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.click('.new-todo');
  await page.fill('.new-todo', "Test 1");
  await page.keyboard.press('Enter');
  await page.fill('.new-todo', "Test 2");
  await page.keyboard.press('Enter');
  await page.fill('.new-todo', "Test 3");
  await page.keyboard.press('Enter');
  await expect(page.locator('.todo-list > li:nth-child(1) > div:nth-child(1) > label:nth-child(2)')).toHaveText('Test 1');
  await expect(page.locator('.todo-list > li:nth-child(2) > div:nth-child(1) > label:nth-child(2)')).toHaveText('Test 2');
  await expect(page.locator('.todo-list > li:nth-child(3) > div:nth-child(1) > label:nth-child(2)')).toHaveText('Test 3');
  await page.click("//html/body/section/div/section/ul/li/div/label[text()='Test 1']/preceding-sibling::input");
  
  const label_elem = page.locator('.todo-list > li:nth-child(1) > div:nth-child(1) > label:nth-child(2)');
  const div_parent = label_elem.locator('..');
  const li_parent = div_parent.locator('..');
  await expect(li_parent).toHaveClass('completed');
  await page.click('.clear-completed');

  await expect(page.locator('.todo-list > li:nth-child(1) > div:nth-child(1) > label:nth-child(2)')).toHaveText('Test 2');
  await expect(page.locator('.todo-list > li:nth-child(2) > div:nth-child(1) > label:nth-child(2)')).toHaveText('Test 3');
  await page.waitForTimeout(2000)
});

