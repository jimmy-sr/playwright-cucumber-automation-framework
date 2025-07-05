import { Given, When } from '@cucumber/cucumber';
import logger from '../logger/logger';
import { CucumberWorld } from './world/cucumberWorld';

const url = 'https://webdriveruniversity.com/'

Given('I navigate to webdriveruniversity homepge', async function (this: CucumberWorld)  {
  try {
    //Access url
    //await pageFixture.page.goto(url)
    await this.basePage.navigate(url);

    logger.info('Accessing URL: ' + url)
    this.setUrl(url);
    // throw new Error('simulating new error');
    
  } catch (error: any) {
     logger.error('Error occured : ' + error.message);
  }
})

When('i click on the contact us button', async function(this: CucumberWorld) {
   this.basePage.waitAndClickByRole("link", "CONTACT US");
})

When('I click on login portal button', async function(this: CucumberWorld) {
   this.basePage.waitAndClickByRole("link", "LOGIN PORTAL");
})

// When('i switch to the new browser tab', async () => {
//   await pageFixture.context.waitForEvent('page')
//   //retrieve all pages in the context
//   const allPages = await pageFixture.context.pages()
//   //Assign the most recent page to the pageFixture
//   pageFixture.page = allPages[allPages.length - 1]

//   // bring the newly assined tab to the front
//   await pageFixture.page.bringToFront()
//   //ensure the new tab is also fully maximized
//   await pageFixture.page.setViewportSize({ width: 1920, height: 1080 })
// })
