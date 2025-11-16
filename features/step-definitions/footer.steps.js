import { Given, When, Then } from '@wdio/cucumber-framework';
import FooterPage from '../pageobjects/footer.page.js';

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

When(/^I click the "([^"]+)" link in the Company section$/, async (linkName) => {
    await FooterPage.clickCompanyLink(linkName);
});

Then(/^I should be redirected to the "([^"]+)" page 2$/, async (linkName) => {
    await FooterPage.verifyCompanyRedirect(linkName);
});

Then(/^I return to the original page$/, async () => {
    await FooterPage.returnToOriginalTab();
});

// Then(/^I return to the original page$/, async function () {
//     await FooterPage.returnToOriginalTab();
// });
