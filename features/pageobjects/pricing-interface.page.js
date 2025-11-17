import { $, $$, browser } from '@wdio/globals';

class PricingPage {

    // Pay as you go block
    get payAsYouGoBlock() {
        return $('.c-fGMpXm.c-jKyrFd.c-jKyrFd-bVdWhF-cardTheme-green');
    }

    get titleStrong() {
        return $('strong.c-PJLV.c-fNZqWL.c-PJLV-cHtIMp-dark-false.c-fxpBlV');
    }

    get subtitleStrong() {
        return $('strong.c-PJLV.c-fKwEGa.c-PJLV-cHtIMp-dark-false');
    }

    get checkmarkBlocks() {
        return $$('.c-kcyicU');
    }

    get checkmarkTexts() {
        return $$('p.c-PJLV.c-flfFMq.c-PJLV-cHtIMp-dark-false.c-PJLV-ghYBfS-lead-true');
    }

    async scrollToPayAsYouGo() {
        await this.payAsYouGoBlock.scrollIntoView();
        await browser.pause(500);
    }

    async getBackgroundColor() {
        return await this.payAsYouGoBlock.getCSSProperty('background-color');
    }

    async getClasses(element) {
        const classes = await element.getAttribute('class');
        return classes.split(' ');
    }
}

export default new PricingPage();
