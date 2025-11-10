import Page from './page.js';
import { $ } from '@wdio/globals';

class HomePage extends Page {
  /**
   * Selectors for key homepage elements
   */
  get headerLogo() {
    return $('header a[href="/"]');
  }

  get mainNav() {
    return $('nav[aria-label="Main menu"]');
  }

  get tryForFreeButton() {
    return $('a[href*="sign-up"]');
  }

  /**
   * Open the Telnyx homepage
   */
  async open() {
    return super.open('/'); // opens https://telnyx.com/
  }

  /**
   * Check if main menu is displayed
   */
  async isMainMenuVisible() {
    return await this.mainNav.isDisplayed();
  }

  /**
   * Click "Try for Free" button
   */
  async clickTryForFree() {
    if (await this.tryForFreeButton.isDisplayed()) {
      await this.tryForFreeButton.click();
    }
  }
}

export default new HomePage();
