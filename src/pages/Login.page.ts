import BasePage from './Base.page';

export default class LoginPage extends BasePage {
    get formTitle() {
        return $('android=new UiSelector().text("Login / Sign up Form")')}
    get emailInput() { 
        return $('~input-email')}
    get passwordInput() { 
        return $('~input-password')}
    get loginButton() { 
        return $('~button-LOGIN')}
    get signUpContainer() { 
        return $('~button-sign-up-container')}
    get loginContainer() { 
        return $('~button-login-container')}
    get errorMessage() { 
        return $('android=new UiSelector().text("Please enter a valid email address")')}
    get biometricsInstruction() {
    return $('android=new UiSelector().textContains("biometrics")')}
     get alertTitle() {
        return $('android=new UiSelector().text("Success")')}
    get alertMessage() { 
        return $('android=new UiSelector().text("You are logged in!")')}
    get alertOkButton() {
        return $('android=new UiSelector().text("OK")')}


    // Methods
    async login(email: string, password: string) {


        await this.emailInput.waitForDisplayed()
        await this.emailInput.setValue(email)
        await this.passwordInput.waitForDisplayed()
        await this.passwordInput.setValue(password)
        await this.loginButton.click()
        return await this.isAlertDisplayed();
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const alertElement = await this.alertMessage
            await alertElement.waitForDisplayed({timeout: 5000})
            return true;
        } catch {
            return false;
        }
    }

    async getLoginError(): Promise<string> {
        const errorElement = await this.errorMessage
        await errorElement.waitForDisplayed({timeout: 5000})
        return await this.errorMessage.getText()
    }

     async isLoginFormDisplayed(): Promise<boolean> {
        try {
            const form = this.formTitle;
            return await form.isDisplayed();
        } catch {
            return false;
        }
    }
    
    async isAlertDisplayed(): Promise<boolean> {
        try {
            const alert = this.alertTitle;
            return await alert.isDisplayed();
        } catch {
            return false;
        }
    }

    async closeSuccessAlert(){
        try {
            const okButton = this.alertOkButton;
            await okButton.waitForDisplayed({ timeout: 5000 });
            await okButton.click();
            
            // Wait for alert to disappear
            await okButton.waitForDisplayed({ reverse: true, timeout: 5000 });
        } catch (error) {
            console.log('Could not close alert:', error);
        }
    }

     async resetLoginForm(): Promise<void> {
        // Navigate away and back to reset form state
        await this.navigateToHome();
        await browser.pause(1000);
        await this.navigateToLogin();
        await browser.pause(1000);
    }
}