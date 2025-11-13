import Page from './base.page.js';
import { $ } from '@wdio/globals';

class FooterPage extends Page {
  get footerSection() {
    return $('footer');
  }

  // 👇 твій логотип у футері — <a href="/" class="c-fZcwcz mchNoDecorate">
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

  // async verifyHomeRedirect() {
  //   await browser.waitUntil(
  //     async () => (await browser.getUrl()) === 'https://telnyx.com/',
  //     {
  //       timeout: 10000,
  //       timeoutMsg: 'Expected to be redirected to the Telnyx homepage',
  //     }
  //   );
  // }
}

export default new FooterPage();
