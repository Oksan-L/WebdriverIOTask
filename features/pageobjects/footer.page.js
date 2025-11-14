import Page from './base.page.js';
import { $ } from '@wdio/globals';

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



constructor() {
        super();
        this.url = 'https://telnyx.com/pricing'; // оригінальна сторінка
    }

    // Гетер для всіх посилань у секції Company
    get companyLinks() {
        return $$('footer .company a');
    }

    // Клік по конкретному лінку за назвою
    async clickCompanyLink(name) {
        const link = await this.companyLinks.find(async (el) => (await el.getText()) === name);
        if (!link) throw new Error(`Link with name "${name}" not found`);
        
        await link.scrollIntoView();
        await link.click();
    }

    // Перевірка, що відбулося перенаправлення на потрібну сторінку
    async verifyRedirect2(expectedPath) {
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes(expectedPath),
            {
                timeout: 5000,
                timeoutMsg: `Expected URL to include "${expectedPath}"`,
            }
        );
    }

    // Повернення на оригінальну сторінку
    async returnToOriginalPage() {
        await browser.url(this.url);
    }


}

export default new FooterPage();
