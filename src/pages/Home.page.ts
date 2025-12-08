import BasePage from './Base.page';

export default class HomePage extends BasePage {
    
    get appLogo() { 
        return $('android=new UiSelector().className("android.widget.ImageView").instance(0)')
    }
    get webdriverText() { 
        return $('android=new UiSelector().className("android.widget.TextView").text("WEBDRIVER")')
    }
    
    get demoAppText() { 
        return $('android=new UiSelector().className("android.widget.TextView").text("Demo app for the appium-boilerplate")')
    }

    get appleIcon() { 
        // 4th TextView instance (index 4 in XML)
        return $('android=new UiSelector().className("android.widget.TextView").instance(4)')
    }
    
    get androidIcon() { 
        // 5th TextView instance (index 5 in XML)
        return $('android=new UiSelector().className("android.widget.TextView").instance(5)')
    }
    
    get supportText() { 
        // 6th TextView instance (index 6 in XML)
        return $('android=new UiSelector().className("android.widget.TextView").instance(6)')
    }


     async isLogoVisible(): Promise<boolean> {
        try {
            const logo = this.appLogo;
            return await logo.isDisplayed();
        } catch {
            return false;
        }
    }

    async isAppleLogoVisible(): Promise<boolean> {
        try {
            const appleIcon = this.appleIcon;
            return await appleIcon.isDisplayed();
        } catch {
            return false;
        }
    }

    async isAndroidLogoVisible(): Promise<boolean> {
        try {
            const androidIcon = this.androidIcon;
            return await androidIcon.isDisplayed();
        } catch {
            return false;
        }
    }
    
    async getWebdriverText(): Promise<string> {
        const element = this.webdriverText;
        await element.waitForDisplayed();
        return await element.getText();
    }
    
    async getDemoText(): Promise<string> {
        const element = this.demoAppText;
        await element.waitForDisplayed();
        return await element.getText();
    }
    
    async getSupportText(): Promise<string> {
        const element = this.supportText;
        await element.waitForDisplayed();
        return await element.getText();
    }
}