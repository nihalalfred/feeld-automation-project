import { $ } from '@wdio/globals';

export default abstract class BasePage {
    // Common selectors
    protected get tabBar() { 
        return $('android=new UiSelector().className("android.view.ViewGroup").instance(5)'); 
    }

    protected get homeTab() { 
        return $('~Home'); 
    }

    protected get webViewTab() { 
        return $('~Webview'); 
    }

    protected get loginTab() { 
        return $('~Login'); 
    }
    
    protected get formsTab() { 
        return $('~Forms'); 
    }
    
    protected get swipeTab() { 
        return $('~Swipe'); 
    }

     protected get dragTab() { 
        return $('~Drag'); 
    }
    // Common methods
    async navigateToHome() {
        await this.homeTab.click();
    }

      async navigateToWebView() {
        await this.webViewTab.click();
    }

    async navigateToLogin() {
        await this.loginTab.click();
    }

    async navigateToForms() {
        await this.formsTab.click();
    }

    async navigateToSwipe() {
        await this.swipeTab.click();
    }

      async navigateToDrag() {
        await this.dragTab.click();
    }

    async waitForElement(element: WebdriverIO.Element, timeout: number = 10000) {
        await element.waitForDisplayed({ timeout });
    }
}