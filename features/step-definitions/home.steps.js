// import { Given, Then } from '@wdio/cucumber-framework';
// import { browser } from '@wdio/globals';

// Given('I open Telnyx home page', async () => {
//   await browser.url('https://telnyx.com/');
// });

// Then('the page title should contain {word}', async (expectedTitlePart) => {
//   const title = await browser.getTitle();
//   expect(title).toContain(expectedTitlePart);
// });

import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

Given('I open Telnyx home page', async () => {
  await HomePage.open();
});

Then('the page title should contain {word}', async (expectedTitlePart) => {
  const title = await browser.getTitle();
  expect(title).toContain(expectedTitlePart);
});
