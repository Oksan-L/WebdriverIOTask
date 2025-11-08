import path from 'path';
import { config as baseConfig } from '../wdio.conf.js';

export const config = {
    ...baseConfig,
    specs: [path.resolve('./features/**/*.feature')],
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--headless'] //optional '--disable-gpu', '--window-size=1920,1080'
        }
    }],
    services: [
        ['chromedriver']
        ]
};
