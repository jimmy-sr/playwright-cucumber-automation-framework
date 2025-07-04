import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContectFixture';

const url = "https://webdriveruniversity.com/"


Given('I navigate to webdriveruniversity homepge', async () => {
    
     //Access url
     await pageFixture.page.goto(url);
});

When('i click on the contact us button', async () => {
     //await page.pause()
     const contactUs_Button = await pageFixture.page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
     await contactUs_Button.click();
});

When('I click on login portal button', async () => {
     const login_Button = await pageFixture.page. getByRole('link', { name: 'LOGIN PORTAL Login Portal Are' });
     await login_Button.click();
});


When('i switch to the new browser tab', async () => {

     await pageFixture.context.waitForEvent('page');
     //retrieve all pages in the context
     const allPages = await pageFixture.context.pages();
     //Assign the most recent page to the pageFixture
     pageFixture.page = allPages[allPages.length - 1];

     // bring the newly assined tab to the front
     await pageFixture.page.bringToFront();
     //ensure the new tab is also fully maximized
     await pageFixture.page.setViewportSize({ width: 1920, height: 1080});
});