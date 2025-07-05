import { Page } from '@playwright/test';

//load env variables from .env file
import { config as loadEnv } from 'dotenv';
const env = loadEnv({path: './env/.env'})

export function setGlobalSettings(page: Page) {
  const navigationTimeout = parseInt(env.parsed?.UI_AUTOMATION_NAVIGATION_TIMEOUT || '50000');
  const commandTimeout = parseInt(env.parsed?.UI_AUTOMATION_COMMAND_TIMEOUT || '30000');
  //set global navigation timeout
  page.setDefaultNavigationTimeout(navigationTimeout) // -> 50 seconds
  //set global command timeout
  page.setDefaultTimeout(commandTimeout) // => 30 Seconds
}
