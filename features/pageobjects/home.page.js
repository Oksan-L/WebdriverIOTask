import Page from './base.page.js';
import { $ } from '@wdio/globals';

class HomePage extends Page {
  get callYourAgentButton() {
    return $('a[href="#interactive-tool-demo"]');
  }

  get interactiveToolSection() {
    return $('#interactive-tool-demo');
  }

  async open() {
    return super.open('/');
  }

  async clickCallYourAgent() {
    await this.acceptCookiesIfPresent();
    const button = await $('a[href="#interactive-tool-demo"]');
    await button.scrollIntoView();
    await button.waitForClickable({ timeout: 5000 });
    await button.click();
  }

  async isInteractiveToolVisible() {
    await this.interactiveToolSection.waitForDisplayed({ timeout: 5000 });
    return this.interactiveToolSection.isDisplayed();
  }

  async isPageLoaded() {
    const title = await browser.getTitle();
    return title.includes('Telnyx');
  }

  async acceptCookiesIfPresent() {
    const cookieAcceptButton = await $('#onetrust-accept-btn-handler');
    if (await cookieAcceptButton.isExisting()) {
        await cookieAcceptButton.click();
        await browser.pause(500);
    }
}

}

export default new HomePage();
