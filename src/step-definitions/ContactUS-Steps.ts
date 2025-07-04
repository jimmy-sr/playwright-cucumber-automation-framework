import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContectFixture';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';




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
     await pageFixture.page.getByRole('button', { name: 'SUBMIT' }).click();
     //  (await pageFixture.page.waitForSelector('input[type="Submit"]')).click()

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


//Random data - FAKER
When('i type a random first name', async () => {
     const randomFirstName = faker.person.firstName();
     await pageFixture.page.getByPlaceholder('First Name').fill(randomFirstName);
});

When('i type a random last name', async () => {
     const randomLastName = faker.person.lastName();
     await pageFixture.page.getByPlaceholder('Last Name').fill(randomLastName);
});

When('i type random email address', async () => {
     const randomEmail = faker.internet.email();
     await pageFixture.page.getByPlaceholder('Email Address').fill(randomEmail);
});

// scenario outline steps

When('i type a firstname {word} and lastName {word}', async (firstName: string, lastName: string) => {
     await pageFixture.page.getByPlaceholder('First Name').fill(firstName);
     await pageFixture.page.getByPlaceholder('Last Name').fill(lastName);
});


When('i type a emailAddress {string} and a comment {string}', async (emailAddress: string, comment: string) => {
     await pageFixture.page.getByPlaceholder('Email Address').fill(emailAddress);
     await pageFixture.page.getByPlaceholder('Comments').fill(comment);

});

Then('i should be presented with header text {string}', async (message: string) => {
     //     //hi
     //     //body
     //     // wait for the target element
     //     await pageFixture.page.waitForSelector("//h1 | //body", { state: 'visible', timeout: 5000 });
     //     //get all elements

     //     const elements = await pageFixture.page.locator("//h1 | //body").elementHandles();
     //     let foundElementText = '';

     //     for(let element of elements) {
     //           let text = await element.innerText();
     //           if(text.includes(message)) {
     //                foundElementText = text;
     //                break;
     //           }
     //     }

     //     //perform validation
     //     expect(foundElementText).toContain(message);

     await pageFixture.page.waitForSelector('text=${message}', { timeout: 5000 });
     const elementByText = pageFixture.page.getByText(message);
     const text = await elementByText.textContent();
     expect(text).toContain(message);


});