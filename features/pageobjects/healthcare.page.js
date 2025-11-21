import Page from './base.page.js';
import { $, $$, browser } from '@wdio/globals';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const useCases = require('../../data/useCases.json');

class HealthcarePage extends Page  {

    // 019

    get useCasesSection() {
        return $('div=USE CASES');
    }

    get tabs() {
        return $$('button[role="tab"]');
    }

    tabDescription(index) {
        return this.tabs[index].$('p');
    }

    get panels() {
        return $$('div[data-state]');
    }

    panelText(index) {
        return this.panels[index].$('p');
    }

    async open() {
        await super.open('/solutions/healthcare');
    }

    async scrollToUseCases() {
        await this.useCasesSection.waitForDisplayed({ timeout: 5000 });
        await this.useCasesSection.scrollIntoView();
    }

    async clickTab(index) {
        const tab = this.tabs[index];
        await tab.waitForClickable();
        await tab.click();

        await browser.pause(300);
    }

    async verifyPanel(index) {
        const expectedText = useCases.panels[index].text;

        const p = this.tabDescription(index);
        await p.waitForDisplayed({ timeout: 5000 });

        const actualText = await p.getText();

        expect(actualText).toContain(expectedText);
    }

    // 020

    async clickYoutubeLink() {
        // Button has link text 'Watch demo'
        const link = await $('a*=Watch demo');

        await link.waitForExist({ timeout: 7000 });
        await link.scrollIntoView();
        await link.waitForClickable({ timeout: 7000 });

        this.originalWindow = await browser.getWindowHandle();
        await link.click();

        await browser.waitUntil(async () => {
            const handles = await browser.getWindowHandles();
            return handles.length > 1;
        }, { timeout: 7000 });

        const handles = await browser.getWindowHandles();
        const newTab = handles.find(h => h !== this.originalWindow);

        await browser.switchToWindow(newTab);
    }

    async verifyYoutubePage() {
        await browser.pause(1000);
        const url = await browser.getUrl();
        expect(url).toMatch(/youtube\.com|youtu\.be/);
    }

    async closeTabAndReturn() {
        await browser.closeWindow();
        await browser.switchToWindow(this.originalWindow);
    }

    // 018 

    get scheduleDemoBtn() {
        return $('a*=Schedule a demo');
    }

    get signUpBtn() {
        return $('a[title="Sign Up - Secondary"]');
    }

    async scrollToFirstBlockButtons() {
        await this.scheduleDemoBtn.waitForExist({ timeout: 5000 });
        await this.scheduleDemoBtn.scrollIntoView();
        await browser.pause(300); 
    }

    async clickScheduleDemo() {
        await this.scheduleDemoBtn.waitForClickable({ timeout: 5000 });
        await this.scheduleDemoBtn.click();
    }

    async verifyContactUsRedirect() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/contact-us'),
            {
                timeout: 5000,
                timeoutMsg: 'Not redirected to Contact Us page'
            }
        );
    }

    async returnToHealthcarePage() {
        await browser.url('https://telnyx.com/solutions/healthcare');
        await browser.pause(500);
    }

    async clickSignUp() {
        await this.signUpBtn.waitForClickable({ timeout: 5000 });
        await this.signUpBtn.click();
    }

    async verifySignUpRedirect() {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/sign-up'),
            {
                timeout: 5000,
                timeoutMsg: 'Not redirected to Sign Up page'
            }
        );
    }

    // 017

    get talkToExpertButtons() {
        // Collect all "Talk to an expert" buttons on the page
        return $$('a*=Talk to an expert');
    }

    async scrollToTalkButton(index) {
        const buttons = await this.talkToExpertButtons;
        if (!buttons || buttons.length <= index) {
            throw new Error(`Talk to an expert button with index ${index} not found (found ${buttons.length || 0})`);
        }
        const button = buttons[index];
        await button.waitForExist({ timeout: 7000 });
        await button.scrollIntoView();
        await browser.pause(300);
        await button.waitForDisplayed({ timeout: 5000 });
    }

    async clickTalkButton(index) {
        const buttons = await this.talkToExpertButtons;
        if (!buttons || buttons.length <= index) {
            throw new Error(`Talk to an expert button with index ${index} not found (found ${buttons.length || 0})`);
        }
        const button = buttons[index];
        await button.waitForClickable({ timeout: 7000 });
        await button.click();
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('/contact-us'),
            {
                timeout: 7000,
                timeoutMsg: 'Not redirected to Contact Us page after clicking Talk to an expert'
            }
        );
    }

}

export default new HealthcarePage();
