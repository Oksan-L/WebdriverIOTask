import { Given, When, Then } from '@wdio/cucumber-framework';
import TopNavigationPage from '../pageobjects/pricingPage.js';

Given('I open the Telnyx Pricing page', async () => {
    await browser.url('https://telnyx.com/pricing');
});

When('I click the {string} button in the top navigation bar', async (buttonName) => {
    if (buttonName === 'Sign Up') {
        await TopNavigationPage.clickSignUpButton();
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
