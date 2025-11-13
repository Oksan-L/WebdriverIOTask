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

// When('I click the {string} button in the top navigation bar', async (buttonName) => {
//     if (buttonName === 'Sign Up') {
//         await TopNavigationPage.clickSignUpButton();
//     } else {
//         throw new Error(`Button "${buttonName}" not implemented`);
//     }
// });
When(/^I click the "Sign Up" button in the top navigation bar$/, async () => {
  await PricingPage.clickSignUpButton();
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes('/sign-up'),
    { timeout: 10000, timeoutMsg: 'Sign Up page did not open in time' }
  );
});

Then(/^I should be redirected to the signup page$/, async () => {
  const currentUrl = await browser.getUrl();
  await expect(currentUrl).toContain('/sign-up');
});

Then(/^the signup form should be visible$/, async () => {
  await expect(await PricingPage.isSignUpFormVisible()).toBe(true);
});

// --- Top navigation buttons (SETI, Contact us, Log in) ---

When(/^I click on the "(.*)" button in the navigation bar$/, async (buttonName) => {
  await PricingPage.clickTopNavButton(buttonName);
});

Then(/^I should be redirected to "(.*)"$/, async (expectedUrl) => {
  await browser.waitUntil(
    async () => (await browser.getUrl()).includes(expectedUrl),
    {
      timeout: 5000,
      timeoutMsg: `Expected to be redirected to ${expectedUrl}`,
    }
  );
});

When(/^I return to the pricing page$/, async () => {
  await PricingPage.returnToPricingPage();
});
