import { Given, When, Then } from '@wdio/cucumber-framework';
import FooterPage from '../pageobjects/footer.page.js';

When(/^I scroll to the footer$/, async () => {
  await FooterPage.scrollToFooter();
});

When(/^I click the Telnyx logo in the footer$/, async () => {
  await FooterPage.clickFooterLogo();
});
