import { After, AfterAll, Before, BeforeAll, context, Status } from "@cucumber/cucumber";
import { Browser, chromium,  } from "@playwright/test"
import { pageFixture } from "./browserContectFixture"


let browser: Browser

BeforeAll(async function() {
    console.log("\n Executed test suite....")
})

// After all hook: Runs once after all scenarios in the test suite
AfterAll(async function() {
    console.log("\n Executed test suite....")
})

//Before hook: Runs before each scenario
Before(async function() {
     //setup browser instance
        browser = await chromium.launch({ headless: false });
        pageFixture.context = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
        pageFixture.page = await pageFixture.context.newPage();

})

After(async function({pickle, result}) {
    if (result?.status === Status.FAILED) {
        if(pageFixture.page) {
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
    await pageFixture.context.close();
    await browser.close();
})

