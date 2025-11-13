import Page from './base.page.js';
import { $ } from '@wdio/globals';

class PricingPage extends Page {
  get telnyxLogo() {
    return $('a[href="/"] img[alt="Telnyx Logo"]');
  }

get signUpButton() {
    return $('a[href="/sign-up"] span[data-content="Sign up"]');
}

  get setiButton() { return $('a[href="https://seti.telnyx.com"]'); }
  get contactUsButton() { return $('a[href="/contact-us"]'); }
  get loginButton() { return $('a[href="https://portal.telnyx.com"]'); }

  async open() {
    return super.open('/pricing');
  }

  async clickTelnyxLogo() {
    await this.telnyxLogo.waitForDisplayed({ timeout: 5000 });
    await this.telnyxLogo.waitForClickable({ timeout: 5000 });
    await this.telnyxLogo.click();
  }

async clickSignUpButton() {
    await this.acceptCookiesIfPresent();
    const button = await this.signUpButton.parentElement();
    await button.waitForDisplayed({ timeout: 15000 });
    await button.waitForClickable({ timeout: 5000 });
    await button.click();
}

  async clickTopNavButton(buttonName) {
    await this.acceptCookiesIfPresent();
    let button;
    switch (buttonName.toLowerCase()) {
      case 'seti':
        button = this.setiButton;
        break;
      case 'contact us':
        button = this.contactUsButton;
        break;
      case 'log in':
        button = this.loginButton;
        break;
      default:
        throw new Error(`Unknown button: ${buttonName}`);
    }

    await button.waitForClickable({ timeout: 5000 });

    // Якщо кнопка відкриває нову вкладку
    const newTab = ['seti', 'log in'].includes(buttonName.toLowerCase());
    if (newTab) {
      const originalHandle = await browser.getWindowHandle();
      const handlesBefore = await browser.getWindowHandles();

      await button.click();

      await browser.waitUntil(async () => {
        const handlesNow = await browser.getWindowHandles();
        return handlesNow.length > handlesBefore.length;
      }, { timeout: 5000, timeoutMsg: 'Expected new tab to open' });

      const handlesAfter = await browser.getWindowHandles();
      const newTabHandle = handlesAfter.find(h => !handlesBefore.includes(h));

      await browser.switchToWindow(newTabHandle);
    } else {
      await button.click();
    }
  }

  async returnToPricingPage() {
    // Якщо ми в новій вкладці → закриваємо і повертаємося
    const handles = await browser.getWindowHandles();
    if (handles.length > 1) {
      await browser.closeWindow();
      await browser.switchToWindow(handles[0]);
    } else {
      // Якщо в тій же вкладці → просто назад
      await browser.back();
    }
  }

  async acceptCookiesIfPresent() {
    const cookieButton = await $('#onetrust-accept-btn-handler');
    if (await cookieButton.isExisting()) {
      await cookieButton.click();
      await browser.pause(500);
    }
  }

  async isSignUpFormVisible() {
    const form = await $('form[action="/sign-up"]');
    return form.isDisplayed();
  }
}

export default new PricingPage();
