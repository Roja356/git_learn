const {test, expect} = require('@playwright/test');
const {LoginPage} = require('./LoginPage');

test.describe('Login Functionality', () => {

  test('Login with Valid Credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('bs23test@gmail.com', 'Test123');
    await expect(page).toHaveURL('http://commercial-dev.sentineltechno.com/');
  });

  test('login Invalid password', async ({page}) => {
    const loginPage = new LoginPage(page);
   await loginPage.goto();
   await loginPage.login('bs23test@gmail.com', 'wrong password');
  await expect(loginPage.errorMessage).toBeVisible();
  });

});