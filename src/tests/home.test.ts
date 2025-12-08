import { quitApp } from '../utils/cleanup';
import HomePage from '../pages/Home.page';

describe('Home Feature Tests', () => {
    let homePage: HomePage
    
    before(async () => {
        homePage = new HomePage()
    });

    after(async () => {
    await quitApp();
    });

    it('should display home screen', async () => {
        await homePage.isLogoVisible()
        const titleText = await homePage.getWebdriverText()
        expect(titleText).toBe('WEBDRIVER')
        const demoText = await homePage.getDemoText()
        expect(demoText).toBe('Demo app for the appium-boilerplate')
        await homePage.isAppleLogoVisible()
        await homePage.isAndroidLogoVisible()
        await homePage.supportText.isDisplayed()
    })
})