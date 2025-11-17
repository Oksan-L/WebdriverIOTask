import { Given, When, Then } from '@wdio/cucumber-framework';
import PricingPage from '../pageobjects/pricing-interface.page.js';

// ========== PAY AS YOU GO TESTS ==========

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


// ========== VOLUME-BASED PRICING TESTS ==========

When('I scroll to the Volume-based pricing block', async () => {
    await PricingPage.scrollToVolumeBased();
});

Then('the Volume-based pricing block background should be correct', async () => {
    const bg = await PricingPage.volumeBlock.getCSSProperty('background-color');
    expect(bg.value).toBe('rgba(254,253,245,1)'); // #FEFDF5
});

Then('the Volume-based pricing title should be visible and correct', async () => {
    const el = PricingPage.volumeTitle;
    expect(await el.isDisplayed()).toBe(true);
    expect(await el.getText()).toBe('VOLUME-BASED PRICING');
});

Then('the Volume-based pricing subtitle should be visible and correct', async () => {
    const el = PricingPage.volumeSubtitle;
    expect(await el.isDisplayed()).toBe(true);
    expect(await el.getText()).toBe('Do more; pay less.');
});

Then('the Volume-based pricing block should have 3 checkmark blocks', async () => {
    const blocks = await PricingPage.volumeCheckmarkBlocks;
    expect(blocks.length).toBe(3);
});

Then('the Volume-based pricing block should have 3 checkmark texts', async () => {
    const texts = await PricingPage.volumeCheckmarkTexts;
    expect(texts.length).toBe(3);
});

Then('all Volume-based pricing checkmark texts should be visible', async () => {
    const texts = await PricingPage.volumeCheckmarkTexts;
    for (const el of texts) {
        expect(await el.isDisplayed()).toBe(true);
    }
});

// ========== BENEFITS SECTION TESTS ==========

When('I scroll to the benefits section', async () => {
    await PricingPage.scrollToBenefits();
});

Then('the benefits section should exist', async () => {
    expect(await PricingPage.benefitsSection.isDisplayed()).toBe(true);
});

Then('the benefits section title should be visible and correct', async () => {
    const h2 = PricingPage.benefitsTitle;
    expect(await h2.isDisplayed()).toBe(true);
    expect(await h2.getText()).toBe('Enjoy all the benefits at no extra cost');
});

Then('the benefits section should contain exactly one list', async () => {
    const ul = PricingPage.benefitsList;
    expect(await ul.isExisting()).toBe(true);
});

Then('the benefits list should have 3 items', async () => {
    const items = await PricingPage.benefitItems;
    expect(items.length).toBe(3);
});

Then('each benefit item should contain one heading and one paragraph', async () => {
    const headings = await PricingPage.benefitHeadings;
    const paragraphs = await PricingPage.benefitTexts;

    expect(headings.length).toBe(3);
    expect(paragraphs.length).toBe(3);

    for (const h of headings) {
        expect(await h.isDisplayed()).toBe(true);
    }
    for (const p of paragraphs) {
        expect(await p.isDisplayed()).toBe(true);
    }
});
