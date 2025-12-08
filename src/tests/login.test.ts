import LoginPage from '../pages/Login.page'
import { DataGenerator, LoginCredentials } from '../utils/data-generator'

describe('Login Feature Tests', () => {
    let loginPage: LoginPage
    const validCredentials: LoginCredentials = {
        email: DataGenerator.generateEmail(),
        password: DataGenerator.generatePassword()
    };

    before(async () => {
         await new Promise(resolve => setTimeout(resolve, 3000));
        loginPage = new LoginPage()
        await loginPage.navigateToLogin()
    })

     // Reset state after each test
    afterEach(async () => {
        // Always close alert if present
        if (await loginPage.isAlertDisplayed()) {
            await loginPage.closeSuccessAlert();
        }
        
        // Reset form state
        await loginPage.resetLoginForm();
    });

    it('should display login form correctly', async () => {
        await expect(loginPage.formTitle).toBeDisplayed()
        await expect(loginPage.loginContainer).toBeDisplayed()
        await expect(loginPage.signUpContainer).toBeDisplayed()
        await expect(loginPage.emailInput).toBeDisplayed()
        await expect(loginPage.passwordInput).toBeDisplayed()
        await expect(loginPage.biometricsInstruction).toBeDisplayed()
        await expect(loginPage.loginButton).toBeDisplayed()

    })

    it('should login with valid credentials', async () => {
        await loginPage.login(validCredentials.email, validCredentials.password)
        const isLoggedIn = await loginPage.isLoggedIn()
        expect(isLoggedIn).toBe(true);
    });

    it('should show error with invalid email', async () => {
        await loginPage.navigateToLogin(); // Navigate back
        await loginPage.login('invalid-email', 'password123')
        const errorMessage = await loginPage.getLoginError()
        expect(errorMessage).toContain('valid email')
    });

    it('should show error with empty credentials', async () => {
        await loginPage.navigateToLogin()
        await loginPage.login('', '')
        const errorMessage = await loginPage.getLoginError()
        expect(errorMessage).toBeTruthy()
    });
});