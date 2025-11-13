import Page from './base.page.js';
import { $ } from '@wdio/globals';

class PricingPage extends Page {
  get telnyxLogo() {
    return $('a[href="/"] img[alt="Telnyx Logo"]');
  }

  get signUpButton() {
    return $('header a[href="/sign-up"] span=Sign up');
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
    await browser.pause(1000);

    const button = await this.signUpButton;

    await browser.waitUntil(async () => await button.isExisting(), {
        timeout: 15000,
        timeoutMsg: 'Sign Up button not found in DOM'
    });

    if (!(await button.isDisplayed())) {
        await button.scrollIntoView();
    }

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
    const handles = await browser.getWindowHandles();
    if (handles.length > 1) {
      await browser.closeWindow();
      await browser.switchToWindow(handles[0]);
    } else {
      await browser.back();
    }
  }

// async acceptCookiesIfPresent() {
//     const cookieBtn = await $('#onetrust-accept-btn-handler');
//     if (await cookieBtn.isExisting()) {
//         try {
//             await cookieBtn.waitForDisplayed({ timeout: 10000 });
//             await browser.pause(300);
//             if (await cookieBtn.isClickable()) {
//                 await cookieBtn.click();
//             } else {
//                 await browser.execute((el) => el.click(), cookieBtn);
//             }
//             await browser.pause(500);
//         } catch (err) {
//             console.warn('Cookie banner found but could not be interacted with:', err.message);
//         }
//     }
// }


  async isSignUpFormVisible() {
    const form = await $('form[action="/sign-up"]');
    return form.isDisplayed();
  }
}

export default new PricingPage();
