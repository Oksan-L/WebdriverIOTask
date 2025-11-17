import { Given, When, Then } from '@wdio/cucumber-framework';
import PricingPage from '../pageobjects/pricing-interface.page.js';

When('I scroll to the Pay as you go block', async () => {
    await PricingPage.scrollToPayAsYouGo();
});

Then('the Pay as you go block background should be correct', async () => {
    const bg = await PricingPage.getBackgroundColor();
    expect(bg.value).toBe('rgba(0,227,170,0.95)');
});

Then('the Pay as you go block should have correct classes', async () => {
    const classes = await PricingPage.getClasses(PricingPage.payAsYouGoBlock);
    expect(classes).toContain('c-fGMpXm');
    expect(classes).toContain('c-jKyrFd');
    expect(classes).toContain('c-jKyrFd-bVdWhF-cardTheme-green');
});

Then('the Pay as you go title should be visible and correct', async () => {
    const title = PricingPage.titleStrong;
    expect(await title.isDisplayed()).toBe(true);
    expect(await title.getText()).toBe('PAY AS YOU GO');
});

Then('the Pay as you go title should have correct classes', async () => {
    const classes = await PricingPage.getClasses(PricingPage.titleStrong);
    expect(classes).toContain('c-PJLV');
    expect(classes).toContain('c-fNZqWL');
    expect(classes).toContain('c-PJLV-cHtIMp-dark-false');
});

Then('the Pay as you go subtitle should be visible and correct', async () => {
    const subtitle = PricingPage.subtitleStrong;
    expect(await subtitle.isDisplayed()).toBe(true);
    expect(await subtitle.getText()).toBe('Pay only for what you use, when you use it.');
});

Then('the Pay as you go subtitle should have correct classes', async () => {
    const classes = await PricingPage.getClasses(PricingPage.subtitleStrong);
    expect(classes).toContain('c-PJLV');
    expect(classes).toContain('c-fKwEGa');
});

Then('the Pay as you go checkmark texts count should be 3', async () => {
    const texts = await PricingPage.checkmarkTexts;
    expect(texts.length).toBe(3);
});

Then('all Pay as you go checkmark texts should be visible', async () => {
    const texts = await PricingPage.checkmarkTexts;
    for (const el of texts) {
        expect(await el.isDisplayed()).toBe(true);
    }
});
