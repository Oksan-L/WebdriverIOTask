import { Given, When, Then } from '@wdio/cucumber-framework';
import FooterPage from '../pageobjects/footer.page.js';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const companyLinks = require('../../data/companyLinks.json');
const legalLinks   = require('../../data/legalLinks.json');

When(/^I scroll to the footer$/, async () => {
  await FooterPage.scrollToFooter();
});

When(/^I click the Telnyx logo in the footer$/, async () => {
  await FooterPage.clickFooterLogo();
});

When(/^I click the "([^"]+)" icon in the footer$/, async (socialName) => {
  await FooterPage.clickSocialIcon(socialName);
  await FooterPage.switchToNewTab();
});

Then(/^I should be redirected to the "([^"]+)" page$/, async (socialName) => {
  await FooterPage.verifyRedirect(socialName);
});

When(/^I click the "([^"]+)" link in the (\w+) section$/, async (linkText, section) => {
    await FooterPage.clickFooterLink(section, linkText);
});

Then(/^I should be redirected to the "([^"]+)" page C$/, async (linkName) => { // Company
    await FooterPage.verifyCompanyRedirect(linkName);
});

Then(/^I should be redirected to the "([^"]+)" page L$/, async (linkName) => { // Legal
    await FooterPage.verifyLegalRedirect(linkName);
});

Then(/^I return to the original page$/, async () => {
    await FooterPage.returnToOriginalTab();
});
