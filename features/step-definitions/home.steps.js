import { Given, When, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

// Then('the page title should contain {word}', async (expectedTitlePart) => {
//   const title = await browser.getTitle();
//   expect(title).toContain(expectedTitlePart);
// });
Then(/^the page title should contain "([^"]+)"$/, async (expectedTitle) => {
  const title = await browser.getTitle();
  await expect(title).toContain(expectedTitle);
});

When(/^I click the "CALL YOUR AGENT" button$/, async () => {
  await HomePage.clickCallYourAgent();
});

Then(/^the "Interactive Tool Demo" section should be visible in the viewport$/, async () => {
  const isVisible = await HomePage.isInteractiveToolVisible();
  await expect(isVisible).toBe(true);
});