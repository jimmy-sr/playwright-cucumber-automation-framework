import { Page } from '@playwright/test'

export function setGlobalSettings(page: Page) {
  //set global navigation timeout
  page.setDefaultNavigationTimeout(50000)
  //set global command timeout
  page.setDefaultTimeout(30000)
}
