import { Given, Then, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContextFixture';
import { expect } from '@playwright/test';

let alertText: string;

When('i type a username {word}', async (userName: string) => {
    await pageFixture.page.getByPlaceholder('Username').fill(userName);
});

When('I type a password {word}', async (password: string) => {
    await pageFixture.page.getByPlaceholder('Password').fill(password);
});


When('I click on Login button', async () => {
    await pageFixture.page.on("dialog", async (alert) => {
        alertText = alert.message();
        // console.log(alertText);
        alert.accept();
    });
    const loginButton = await pageFixture.page.locator('#login-button');
    await loginButton.hover();
    await loginButton.click({ force: true });
});


Then('I should be presented with an alert box which contains text {string}', async (expectredAlertText: string) => {
    expect(alertText).toBe(expectredAlertText);
});