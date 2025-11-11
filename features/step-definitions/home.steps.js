import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
//import HomePage from '../pageobjects/home.page.js';

Then('the page title should contain {word}', async (expectedTitlePart) => {
  const title = await browser.getTitle();
  expect(title).toContain(expectedTitlePart);
});
