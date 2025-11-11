import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';

// Given('I open Telnyx home page', async () => {
//   await HomePage.open();
// });

Given(/^I open (?:the )?Telnyx home page$/, async () => {
  await HomePage.open();
});

Given(/^I open (?:the )?page "([^"]+)"$/, async (path) => {
  await BasePage.open(path);
});