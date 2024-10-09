export const config = {
       runner: 'local',
       port: 4723,


    // user: 'oauth-jeanfviana-58646',
    // key: '5edea4ec-33f3-42f0-84a5-0d2a06c76b3e',
    // hostname: 'ondemand.us-west-1.saucelabs.com',
    // port: 443,
    // baseUrl: 'wd/hub',


    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances: 1,

    capabilities: [

        {
            // capabilities for local Appium web tests on an Android Emulator
            platformName: 'Android',
            'appium:deviceName': 'ebac',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity': '.MainActivity',
            'appium:disableIdLocatorAutocompletion': true
        }

        // {
        //     platformName: 'Android',
        //     'appium:app': 'storage:filename=ebacshop.aab', // The filename of the mobile app
        //     'appium:deviceName': 'Android GoogleAPI Emulator',
        //     'appium:platformVersion': '9.0',
        //     'appium:automationName': 'UiAutomator2',
        //     'sauce:options': {
        //         appiumVersion: '2.11.0',
        //         build: 'appium-build-teste-ebacshop',
        //         name: 'ebac shp teste',
        //         deviceOrientation: 'PORTRAIT',
        //         //appiumVersion: '2.11.0',
        //     },
        // }



    ],


    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    framework: 'mocha',

    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await browser.takeScreenshot();

    },

}
