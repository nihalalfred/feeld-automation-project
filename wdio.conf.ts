import * as path from 'path';
import type { Options } from '@wdio/types';

const androidAppPath = path.join(process.cwd(), 'app/android/Android-NativeDemoApp-0.4.0.apk');

export const config: Options.Testrunner = {
    runner: 'local',
    
    specs: [
        './src/tests/**/*.test.ts'
    ],
    
    exclude: [],
    
    maxInstances: 1,
    
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': process.env.ANDROID_DEVICE_NAME || 'Pixel_4a_API_33',
        'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION || '13.0',
        'appium:automationName': 'UIAutomator2',
        'appium:app': androidAppPath,
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': true,
        'appium:newCommandTimeout': 300,
    }],
    
    logLevel: 'info',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['appium'],
    
    framework: 'mocha',
    
    reporters: ['spec'],
    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // FIXED: Correct TypeScript config for v8
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },
    
    beforeSession: function (_config, _capabilities, _specs) {
        require('ts-node').register({ project: './tsconfig.json' });
    },
    
    afterTest: async function(test, _context, { passed }) {
        if (!passed) {
            const screenshot = await browser.takeScreenshot();
            const screenshotPath = `./reports/screenshots/${test.title.replace(/\s+/g, '_')}-${Date.now()}.png`;
            require('fs').writeFileSync(screenshotPath, screenshot, 'base64');
            console.log(`Screenshot saved: ${screenshotPath}`);
        }
    }
};