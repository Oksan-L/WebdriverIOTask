import { browser } from '@wdio/globals'

export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`${path}`)
    }

    async acceptCookiesIfPresent() {
    const cookieBtn = await $('#onetrust-accept-btn-handler');
    if (await cookieBtn.isExisting()) {
        try {
            await cookieBtn.waitForDisplayed({ timeout: 10000 });
            await browser.pause(300);
            if (await cookieBtn.isClickable()) {
                await cookieBtn.click();
            } else {
                await browser.execute((el) => el.click(), cookieBtn);
            }
            await browser.pause(500);
        } catch (err) {
            console.warn('Cookie banner found but could not be interacted with:', err.message);
        }
    }
}
}
