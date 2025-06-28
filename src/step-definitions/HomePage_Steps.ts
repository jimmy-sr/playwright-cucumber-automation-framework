import { Given, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let context: any;
let page: Page
const url = "https://webdriveruniversity.com/"


Given('I navigate to webdriveruniversity homepge', async () => {
   //setup browser instance
   browser = await chromium.launch({ headless: false });
   context = await browser.newContext({ viewport: {width: 1920 , height: 1080}});
   page = await context.newPage();

   //Access url
   await page.goto(url);
  
});
When('i click on the contact us button', async () => {
     //await page.pause()
     const contactUc_Button = await page.getByRole('link', { name: 'CONTACT US Contact Us Form' });
     await contactUc_Button.click();

});