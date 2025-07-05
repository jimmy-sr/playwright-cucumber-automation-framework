import { Locator, Page } from '@playwright/test'
import { pageFixture } from '../../step-definitions/hooks/browserContextFixture'

export class BasePage {
  get page(): Page {
    return pageFixture.page
  }

  public async navigate(url: string): Promise<void> {
    await this.page.goto(url)
  }
  public async waitAndClickByRole(role: string, name: string): Promise<void> {
    const element = await this.page.getByRole(role as any, { name: name })
    await element.click()
  }

  public async waitAndClick(locator: Locator): Promise<void> {
    await locator.isVisible()
    await locator.click()
  }

  public async waitAncClickSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }
  
  public async switchToNewTab(): Promise<void> {
    await this.page.context().waitForEvent('page')
    //retrieve all pages in the context
    const allPages = await this.page.context().pages()
    //Assign the most recent page to the pageFixture
    pageFixture.page = allPages[allPages.length - 1]

    // bring the newly assined tab to the front
    await this.page.bringToFront()
    //ensure the new tab is also fully maximized
    await this.page.setViewportSize({ width: 1920, height: 1080 })
  }
}
