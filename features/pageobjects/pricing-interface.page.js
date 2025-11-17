import { $, $$, browser } from '@wdio/globals';

class PricingPage {

    // 011 - Pay as you go block
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

    // 012 - Volume-based pricing block
    get volumeBlock() {
        return $('.c-fGMpXm.c-hApKap');
    }

    get volumeTitle() {
        return $('strong=Volume-based pricing');
    }

    get volumeSubtitle() {
        return $('strong=Do more; pay less.');
    }

    get volumeCheckmarkBlocks() {
        return this.volumeBlock.$$('.c-kcyicU');
    }

    get volumeCheckmarkTexts() {
        return this.volumeBlock.$$('p.c-PJLV.c-flfFMq.c-PJLV-ghYBfS-lead-true');
    }

    async scrollToVolumeBased() {
        await this.volumeBlock.scrollIntoView();
        await browser.pause(500);
    }

    // 013 - Benefits section
    
    get benefitsSection() {
        return $('//h2[text()="Enjoy all the benefits at no extra cost"]/ancestor::section');
    }

    get benefitsTitle() {
        return $('//h2[text()="Enjoy all the benefits at no extra cost"]');
    }

    get benefitsList() {
        return this.benefitsSection.$('ul');
    }

    get benefitItems() {
        return this.benefitsSection.$$('ul > li');
    }

    get benefitHeadings() {
        return this.benefitsSection.$$('ul li h3');
    }

    get benefitTexts() {
        return this.benefitsSection.$$('ul li p');
    }

    async scrollToBenefits() {
        await this.benefitsSection.scrollIntoView();
        await browser.pause(300);
    }
}

export default new PricingPage();
