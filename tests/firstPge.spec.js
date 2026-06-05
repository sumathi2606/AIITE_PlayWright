import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';


test.describe('Login Tests', () => {

  
  let loginPage;

  test.beforeEach(async ({ page }) => {
   loginPage = new LoginPage(page);
    await loginPage.goto();
  });
   
  

  test('valid credentials', async ({ page }) => {
    await loginPage.login('nsumathirajan@gmail.com', '12345@678');
    await page.pause();
    // Add assertions to verify successful login
  })

  test.fail('invalid credentials', async ({ page }) => {
    await loginPage.login('invalid@gmail.com', 'invalidpassword');
    await page.pause();
    // Add assertions to verify login failure
  });

  // test.afterAll(async ({ page }) => {
  //   await page.close();
  // });
  
});