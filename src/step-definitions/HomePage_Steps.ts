import { Given, When } from '@cucumber/cucumber'
import logger from '../logger/logger'
import { pageFixture } from './hooks/browserContextFixture'

const url = 'https://webdriveruniversity.com/'

Given('I navigate to webdriveruniversity homepge', async () => {
  try {
    //Access url
    await pageFixture.page.goto(url)
    logger.info('Accessing URL: ' + url)
    throw new Error('simulating new error');
    
  } catch (error: any) {
     logger.error('Error occured : ' + error.message);
  }
})

When('i click on the contact us button', async () => {
  //await page.pause()
  const contactUs_Button = await pageFixture.page.getByRole('link', {
    name: 'CONTACT US Contact Us Form555',
  })
  await contactUs_Button.click({timeout: 2000})
})

When('I click on login portal button', async () => {
  const login_Button = await pageFixture.page.getByRole('link', {
    name: 'LOGIN PORTAL Login Portal Are',
  })
  await login_Button.click()
})

When('i switch to the new browser tab', async () => {
  await pageFixture.context.waitForEvent('page')
  //retrieve all pages in the context
  const allPages = await pageFixture.context.pages()
  //Assign the most recent page to the pageFixture
  pageFixture.page = allPages[allPages.length - 1]

  // bring the newly assined tab to the front
  await pageFixture.page.bringToFront()
  //ensure the new tab is also fully maximized
  await pageFixture.page.setViewportSize({ width: 1920, height: 1080 })
})
