import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContectFixture';
import { expect } from '@playwright/test';




When('i type a first name', async () => {
     await pageFixture.page.getByPlaceholder('First Name').fill("Timothy");
});

When('i type a last name', async () => {
     await pageFixture.page.getByPlaceholder('Last Name').fill("Robinson");
});

When('i type email address', async () => {
     await pageFixture.page.getByPlaceholder('Email Address').fill("timothy@robinson.com");
});

When('i type comment', async () => {
     await pageFixture.page.getByPlaceholder('Comments').fill("This is a test comment");
});

When('i click on submit button', async () => {
     // await pageFixture.page.getByRole('button', { name: 'SUBMIT' })
     (await pageFixture.page.waitForSelector('input[type="Submit"]')).click()

});


Then('I should see a success message', async function () {
     await pageFixture.page.waitForSelector('#contact_reply h1', { timeout: 6000 });
     //get the text
     const text = await pageFixture.page.innerText('#contact_reply h1');
     expect(text).toBe('Thank You for your Message!');

});

Then('I should see a unsuccessfull message', async function () {
     await expect(pageFixture.page).toHaveTitle('Contact form handler');
     await pageFixture.page.waitForSelector('body');

     const bodyElement = await pageFixture.page.locator('body')
     const bodyText = await bodyElement.textContent();
     expect(bodyText).toMatch(/Error: (all fields are required| Invalid email address)/);
});

//cucumber expressions

When('i type a spedific first name {string}', async (firstName: string) => {
      await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
});

When('i type a specific last name {string}', async (lastName: string) => {
      await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});

When('i type specific email address {string}', async (emailAddress: string) => {
      await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
});

When('i type specific comment {string} and a number {int} within teh comment inpurt field', async (comment: string, count: number) => {
    await pageFixture.page.getByPlaceholder('Comments').fill(`${comment} ${count}`);
});