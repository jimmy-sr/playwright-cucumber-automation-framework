import { Given, When } from "@cucumber/cucumber";
import { pageFixture } from './hooks/browserContectFixture';

// all the common steps should be in the base step
Given("I wait for {int} seconds", async (seconds: number) => {
    await pageFixture.page.waitForTimeout(seconds * 1000);
});