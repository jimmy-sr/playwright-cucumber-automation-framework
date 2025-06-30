import { Given, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';




When('i type a first name', async () => {
     await page.getByPlaceholder('First Name').fill("Timothy");
});

When('i type a last name', async () => {
     await page.getByPlaceholder('Last Name').fill("Robinson");
});

When('i type email address', async () => {
     await page.getByPlaceholder('Email Address').fill("timothy@robinson.com");
});

When('i type comment', async () => {
     await page.getByPlaceholder('Comments').fill("This is a test comment");
});

When('i click on submit button', async () => {
    await page.getByRole('button', { name: 'SUBMIT' })
});
