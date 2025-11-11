import { Given, When, Then } from '@wdio/cucumber-framework';
import PricingPage from '../pageobjects/pricingPage.js';
import HomePage from '../pageobjects/home.page.js';

Given(/^I open the Telnyx pricing page$/, async () => {
  await PricingPage.open();
});

When(/^I click the Telnyx logo in the top navigation bar$/, async () => {
  await PricingPage.clickTelnyxLogo();
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
