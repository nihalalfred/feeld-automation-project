exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    
    specs: ['./src/tests/**/*.test.ts'],
    
    capabilities: [{
        'bstack:options': {
            projectName: "Feeld Automation",
            buildName: process.env.GITHUB_REF_NAME || 'CI Build',
            sessionName: "Android Test",
            debug: true
        },
        platformName: 'Android',
        'appium:platformVersion': '13.0',
        'appium:deviceName': 'Google Pixel 7',
        'appium:app': process.env.BROWSERSTACK_APP_URL,
        'appium:automationName': 'UiAutomator2'
    }],
    
    hostname: 'hub.browserstack.com',
    services: [['browserstack']],
    framework: 'mocha'
};