import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from './hooks/browserContextFixture';
import { CucumberWorld } from "./world/cucumberWorld";


When('I switch to the new browser tab', async function(this: CucumberWorld)  {
    await this.basePage.switchToNewTab();
});

// all the common steps should be in the base step
Given("I wait for {int} seconds", async (seconds: number) => {
    await pageFixture.page.waitForTimeout(seconds * 1000);
});