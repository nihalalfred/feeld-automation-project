import FormsPage from '../pages/Forms.page';
import { quitApp } from '../utils/cleanup';

describe('Forms Feature Tests', () => {
    let formsPage: FormsPage
    
    before(async () => {
        formsPage = new FormsPage()
        await formsPage.navigateToForms()
    });
    
    it('should display forms screen', async () => {
        await expect(formsPage.textInput).toBeDisplayed()
        await expect(formsPage.inputTextResult).toBeEnabled()
        await expect(formsPage.switch).toBeDisplayed()
        await expect(formsPage.switchText).toBeDisplayed()
        await expect(formsPage.dropdown).toBeDisplayed()
        await expect(formsPage.activeButton).toBeEnabled()
        await expect(formsPage.inactiveButton).toBeDisplayed()
    });
    
    it('should enter text in input field', async () => {
        await formsPage.enterText('Feeld Automation Test')
        const enteredText = await formsPage.getEnteredText()
        expect(enteredText).toBe('Feeld Automation Test')
    });
    
    it('should toggle switch', async () => {
        const initialState = await formsPage.isSwitchOn()
        await formsPage.toggleSwitch()
        const finalState = await formsPage.isSwitchOn()
        expect(finalState).toBe(!initialState)
    });
});