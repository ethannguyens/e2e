
let opts = {

    /**
     * server configurations
     */
    host: '0.0.0.0',
    port: 4444,

    /**
     * specify test files
     */
    specs: [
        './src/spec/desktop/search-spec.js'
    ],
    exclude: [
    ],

    /**
     * capabilities
     */
    capabilities: [{
        browserName: 'chrome'
    }],

    /**
     * test configurations
     */
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: 'shots',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    framework: 'jasmine',

    reporters: ['dot'],
    reporterOptions: {
        outputDir: './'
    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('E2E STARTED');
    },
    onComplete: function() {
        console.log('E2E ENDED');

    }

};

exports.config = opts;