import { After, AfterAll, Before, BeforeAll, context } from "@cucumber/cucumber";
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

After(async function() {
    await pageFixture.context.close();
    await browser.close();
})

