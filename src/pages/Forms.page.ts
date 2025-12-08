import BasePage from './Base.page';

export default class FormsPage extends BasePage {
    get textInput() { 
        return $('~text-input') }
    get inputTextResult() { 
        return $('~input-text-result') }
    get switch() { 
        return $('~switch') }
    get switchText() { 
        return $('~switch-text') }
    get dropdown() { 
        return $('~Dropdown')}
    get activeButton() { 
        return $('~button-Active')}
    get inactiveButton() { 
        return $('~button-Inactive')}

    // Methods
    async enterText(text: string) {
        await this.textInput.setValue(text)
    }

    async getEnteredText(): Promise<string> {
        return await this.inputTextResult.getText()
    }

    async toggleSwitch() {
        await this.switch.click()
    }

    async isSwitchOn(): Promise<boolean> {
        const text = await this.switchText.getText()
        return text.includes('ON')
    }

    async selectDropdownOption(option: string) {
        await this.dropdown.click()
        const optionElement = await $(`//*[@content-desc="${option}"]`)
        await optionElement.click()
    }
}