import Page from './base.page.js';
import { $ } from '@wdio/globals';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const companyLinks = require('../../data/companyLinks.json');


class FooterPage extends Page {
  get footerSection() {
    return $('footer');
  }

  get footerLogo() {
    return $('footer a[href="/"].c-fZcwcz.mchNoDecorate');
  }

  async open() {
    await super.open('/pricing');
  }

  async scrollToFooter() {
    const footer = await this.footerSection;
    await footer.waitForExist({ timeout: 10000 });
    await footer.scrollIntoView();
    await browser.pause(1000);
  }

  async clickFooterLogo() {
    await this.acceptCookiesIfPresent();
    const logo = await this.footerLogo;
    await logo.waitForDisplayed({ timeout: 10000 });
    await logo.scrollIntoView();
    await logo.waitForClickable({ timeout: 10000 });
    await logo.click();
  }

  async open(path) {
    await super.open(path);
    await this.acceptCookiesIfPresent();
  }

  async scrollToFooter() {
    await this.acceptCookiesIfPresent();
    const footer = await $('footer');
    await footer.scrollIntoView();
    await browser.pause(300);
  }

  async clickSocialIcon(name) {
      const selectors = {
          LinkedIn: 'a[href*="linkedin.com"]',
          Twitter: 'a[href*="twitter.com"]',
          Facebook: 'a[href*="facebook.com"]',
      };

      const selector = selectors[name];

      if (!selector) {
          throw new Error(`No selector defined for: ${name}`);
      }

      const link = await $(selector);
      await link.waitForClickable();
      await link.click();
  }

  async verifyRedirect(expectedName) {
      const url = await browser.getUrl();

      const expectedPatterns = {
          LinkedIn: /linkedin\.com/i,          
          Twitter: /(twitter\.com|x\.com)/i,
          Facebook: /facebook\.com/i,
          "Our Network": /our-network/i,
          "Global Coverage": /global-coverage/i,
          "Release Notes": /release-notes/i,
          "Careers": /careers/i,
          "Voice AI": /voice-ai/i,
          "AI Glossary": /ai-glossary/i,
          "Shop": /shop/i,
      };

      const pattern = expectedPatterns[expectedName];

      if (!pattern) {
          throw new Error(`No expected pattern defined for: ${expectedName}`);
      }

      expect(url).toMatch(pattern);
  }

    async returnToOriginalTab() {
      const handles = await browser.getWindowHandles();
      await browser.closeWindow();
      await browser.switchToWindow(handles[0]);
  }

  async acceptCookiesIfPresent() {
    const cookieButton = await $('#onetrust-accept-btn-handler');
    if (await cookieButton.isExisting() && await cookieButton.isDisplayed()) {
      await cookieButton.click();
      await browser.pause(300);
    }
  }

  async switchToNewTab() {
    const handles = await browser.getWindowHandles();
    if (handles.length < 2) {
        throw new Error("No new tab opened");
    }
    await browser.switchToWindow(handles[1]);
}


// 008

async clickCompanyLink(linkText) {
    const link = await $(`=${linkText}`);

    await link.waitForExist({ timeout: 5000 });
    await link.scrollIntoView();
    await link.waitForDisplayed({ timeout: 5000 });

    // Інколи Telnyx має плавний скрол →
    await browser.pause(200);

    await link.click();
}

    async verifyCompanyRedirect(name) {
        const expectedUrl = companyLinks[name];
        const currentUrl = await browser.getUrl();

        if (expectedUrl.startsWith('http')) {
            expect(currentUrl).toContain(expectedUrl.replace('https://', ''));
        } else {
            expect(currentUrl).toContain(expectedUrl);
        }
    }

    async switchToNewTabIfNeeded() {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.switchToWindow(handles[1]);
        }
    }

    async returnToOriginalTab() {
        const handles = await browser.getWindowHandles();
        if (handles.length > 1) {
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);
        }
    }

}

export default new FooterPage();
