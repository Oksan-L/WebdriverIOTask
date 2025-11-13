import { Given, Then } from '@wdio/cucumber-framework';
import { browser } from '@wdio/globals';
import HomePage from '../pageobjects/home.page.js';
import FooterPage from '../pageobjects/footer.page.js';
import PricingPage from '../pageobjects/pricingPage.js';

Given(/^I open (?:the )?Telnyx home page$/, async () => {
  await HomePage.open();
});

Given(/^I open (?:the )?page "([^"]+)"$/, async (path) => {
  await BasePage.open(path);
});

Given(/^I open the Telnyx pricing page$/, async () => {
  await PricingPage.open();
});

Then(/^I should be redirected to the Telnyx homepage$/, async () => {
  await browser.waitUntil(
    async () => (await browser.getUrl()) === 'https://telnyx.com/',
    {
      timeout: 5000,
      timeoutMsg: 'Expected to be redirected to https://telnyx.com/',
    }
  );

  const currentUrl = await browser.getUrl();
  await expect(currentUrl).toBe('https://telnyx.com/');
  await expect(await HomePage.isPageLoaded()).toBe(true);
});