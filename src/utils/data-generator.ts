export class DataGenerator {
    static generateEmail(): string {
        const timestamp = Date.now();
        return `test${timestamp}@feeld.com`;
    }

    static generatePassword(): string {
        return `Password${Math.floor(Math.random() * 10000)}!`;
    }

    static generateText(): string {
        const texts = [
            'Hello Feeld!',
            'Testing automation',
            'WebdriverIO is awesome',
            'Appium rocks!',
            'Quality matters'
        ];
        return texts[Math.floor(Math.random() * texts.length)];
    }
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface FormData {
    text: string;
    switchState: boolean;
    dropdownOption: string;
}