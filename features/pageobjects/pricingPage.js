import Page from './base.page.js';
import { $ } from '@wdio/globals';

class PricingPage extends Page {
  get telnyxLogo() {
    return $('a[href="/"] img[alt="Telnyx Logo"]');
  }

  async open() {
    return super.open('/pricing');
  }

  async clickTelnyxLogo() {
    await this.telnyxLogo.waitForDisplayed({ timeout: 5000 });
    await this.telnyxLogo.waitForClickable({ timeout: 5000 });
    await this.telnyxLogo.click();
  }

  get signUpButton() {
        return $('a[href="/sign-up"]');
    }

  async clickSignUpButton() {
      await this.signUpButton.waitForDisplayed({ timeout: 5000 });
      await this.signUpButton.click();
  }

}

export default new PricingPage();
