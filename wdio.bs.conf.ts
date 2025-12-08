exports.config = {
    maxInstances: 1,    
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    
    specs: ['./src/tests/**/*.test.ts'],
    
    capabilities: [{
        'bstack:options': {
            projectName: "Feeld Automation",
            buildName: process.env.GITHUB_REF_NAME || 'CI Build',
            sessionName: "Android Test",
            debug: true,
            networkLogs: true,
            appiumLogs: true,
            deviceLogs: true
        },
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Google Pixel 7',
        'appium:app': process.env.BROWSERSTACK_APP_URL,
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': false, 
        'appium:fullReset': false,
        'appium:newCommandTimeout': 120,
        'appium:adbExecTimeout': 120000
    }],
    
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    hostname: 'hub.browserstack.com',
    framework: 'mocha'
};