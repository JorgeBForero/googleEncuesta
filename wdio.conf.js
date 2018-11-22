const config = require('./config/base.conf');

if (process.platform == 'darwin') {
    config.capabilities.chromeOptions = {
        args: ['--headless', '--disable-gpu', '--window-size=1280,2500'],
        binary: '/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome'
    };
}

exports.config = config;

