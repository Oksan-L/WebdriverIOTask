import { Given, When, Then } from '@wdio/cucumber-framework';
import PricingPage from '../pageobjects/pricingPage.js';
import HomePage from '../pageobjects/home.page.js';

When(/^I click the Telnyx logo in the top navigation bar$/, async () => {
  await PricingPage.clickTelnyxLogo();
});

When('I click the {string} button in the top navigation bar', async (buttonName) => {
    if (buttonName === 'Sign Up') {
        await PricingPage.clickSignUpButton();
    } else {
        throw new Error(`Button "${buttonName}" not implemented`);
    }
});

Then('I should be redirected to the signup page', async () => {
    await browser.waitUntil(
        async () => (await browser.getUrl()).includes('/sign-up'),
        {
            timeout: 10000,
            timeoutMsg: 'Expected to be redirected to /sign-up page'
        }
    );
});

Then('the signup form should be visible', async () => {
    const signupForm = await $('[aria-label="signup-form"]');
    await signupForm.waitForDisplayed({ timeout: 10000 });
    const isVisible = await signupForm.isDisplayed();
    expect(isVisible).toBe(true);
});

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
