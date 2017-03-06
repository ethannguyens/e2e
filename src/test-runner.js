const searchSpec = require('./spec/desktop/search-spec');

const webdriverio = require('webdriverio');

const options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 10000,
        expectationResultHandler: function(passed, assertion) {
            /**
             * only take screenshot if assertion failed
             */
            if(passed) {
                return;
            }
            browser.saveScreenshot('assertionError_' + assertion.error.message + '.png');
        }
    }
};

const browser = webdriverio.remote(options);

const runner = function runner(specs, sites, option) {
    searchSpec(browser);
};

runner();

// module.export = runner;