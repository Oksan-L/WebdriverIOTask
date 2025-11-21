import { Given, When, Then } from '@wdio/cucumber-framework';
import Healthcare from '../pageobjects/healthcare.page.js';

Given('I open the Healthcare Solutions page', async () => {
    await Healthcare.open();
});

When('I scroll to the USE CASES section', async () => {
    await Healthcare.scrollToUseCases();
});

When('I click the {int} Use Case tab', async (num) => {
    await Healthcare.clickTab(num - 1);
});

Then('the {int} Use Case panel should display the correct text', async (num) => {
    await Healthcare.verifyPanel(num - 1);
});

Then('I click the YouTube link in the tab', async () => {
    await Healthcare.clickYoutubeLink();
});

Then('I should be on a YouTube page', async () => {
    await Healthcare.verifyYoutubePage();
});

Then('I close the current tab and return', async () => {
    await Healthcare.closeTabAndReturn();
});

When('I scroll to the first block buttons', async function () {
    await Healthcare.scrollToFirstBlockButtons();
});

When('I click the Schedule a demo button', async function () {
    await Healthcare.clickScheduleDemo();
});

Then('I should be redirected to the Contact Us page', async function () {
    await Healthcare.verifyContactUsRedirect();
});

When('I return to the Healthcare Solutions page', async function () {
    await Healthcare.returnToHealthcarePage();
});

When('I click the Sign up button', async function () {
    await Healthcare.clickSignUp();
});

Then('I should be redirected to the Sign Up page', async function () {
    await Healthcare.verifySignUpRedirect();
});

When('I scroll to the {int} Talk to an expert button', async (num) => {
    await Healthcare.scrollToTalkButton(num - 1);
});

When('I click the {int} Talk to an expert button', async (num) => {
    await Healthcare.clickTalkButton(num - 1);
});
