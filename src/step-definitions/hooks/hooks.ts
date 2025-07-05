import { After, AfterAll, Before, BeforeAll, context, Status } from "@cucumber/cucumber";
import { Browser, chromium, BrowserType, firefox, webkit } from "@playwright/test"
import { pageFixture } from "./browserContextFixture"

//load env variables from .env file
import { config as loadEnv } from "dotenv"
const env = loadEnv({ path: './env/.env' });

//Create a configuration object for easy access to env variables

const config = {
    headless: env.parsed?.HEADLESS === 'true',
    browser: env.parsed?.UI_AUTOMATION_BROWSER || 'chromium',
    width: parseInt(env.parsed?.BROWSER_WIDTH || '1920'),
    height: parseInt(env.parsed?.BROWSER_HEIGHT || '1080'),

}

//create dictionary mapping browser names to their launch functions

const browsers: { [key: string]: BrowserType } = {
    'chromium': chromium,
    'firefox': firefox,
    'webkit': webkit
};


let browserInstance: Browser | null = null;

async function initializeBrowserContext(selectedBrowser: string): Promise<Browser> {
    const launchBrowser = browsers[selectedBrowser];
    if (!launchBrowser) {
        throw new Error(`Invalid brwoser selected: ${selectedBrowser}`);
    }
    return await launchBrowser.launch({ headless: config.headless });
}

async function initializePage(): Promise<void> {
    if (!browserInstance) {
        throw new Error('Browser instance is null');
    }
    pageFixture.context = await browserInstance.newContext({
        ignoreHTTPSErrors: true

    });

    pageFixture.page = await pageFixture.context.newPage();
    await pageFixture.page.setViewportSize({ width: config.width, height: config.height });
}

BeforeAll(async function () {
    console.log("\n Executed test suite....");
})

// After all hook: Runs once after all scenarios in the test suite
AfterAll(async function () {
    console.log("\n Executed test suite....");
})

//Before hook: Runs before each scenario
Before(async function () {
    //setup browser instance
    try {
        browserInstance = await initializeBrowserContext(config.browser);
        console.log(`Browser context initialized for: ${config.browser}`);
        await initializePage();
    } catch (error) {
        console.error("Browser context initialization failed:", error);
    }

})

After(async function ({ pickle, result }) {
    if (result?.status === Status.FAILED) {
        if (pageFixture.page) {
            const screenshotPath = `./reports/screenshots/${pickle.name}-${Date.now()}.png`;
            const image = await pageFixture.page.screenshot({
                path: screenshotPath,
                type: 'png',
                //timeout: 60000
            });
            await this.attach(image, 'image/png');
        } else {
            console.error('pageFixture.page is undefined');
        }

    }
    if (browserInstance) {
        await pageFixture.page?.close();
        await browserInstance.close();
    }
})