import { Given, When } from '@cucumber/cucumber';
import { pageFixture } from './hooks/browserContectFixture';

const url = "https://webdriveruniversity.com/"


Given('I navigate to webdriveruniversity homepge', async () => {
    
     //Access url
     await pageFixture.page.goto(url);

});

When('i click on the contact us button', async () => {
     //await page.pause()
     const contactUs_Button = await pageFixture..getByRole('link', { name: 'CONTACT US Contact Us Form' });
     await contactUs_Button.click();

});


When('i switch to the new browser tab', async () => {

     await pageFixture.context.waitForEvent('page');
     //retrieve all pages in the context
     const allPages = await pageFixture.context.pages();
     //Assign the most recent page to the pageFixture
     pageFixture.page = allPages[allPages.length - 1];
});

