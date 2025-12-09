# React Native Automation Testing Project

## Project Overview
This project demonstrates end-to-end automation testing for a React Native application using WebDriverIO, Appium, and BrowserStack. The tests are integrated with GitHub Actions for continuous integration.

Source: [WebDriverIO Native Demo App](https://github.com/webdriverio/native-demo-app)

This demo app is a sample React Native application that demonstrates various mobile UI components and patterns including:
- Login/Registration
- Forms
- Home
- Additional screens - WebView, Swipe, Drag & Drop..

## Areas Tested with Automation
1. **Login Feature**
   - Valid credentials authentication
   - Invalid input validation
   - Error message display
   - Success flow with alerts

2. **Forms Feature**
   - Text input fields
   - Switch toggles
   - Button interactions

3. **Home Feature**
   - Main screen elements verification

## Frameworks Considered

1. **WebDriverIO + Appium** 

Pros.
- Excellent React Native support
- Strong TypeScript integration
- Cross-platform (iOS/Android)

Cons.
- Setup complexity
- Slower execution
- Requires Appium server

2. **Detox** 

Pros.
- Fast execution
- Built for React Native
- No server required

Cons.

- Limited to React Native
- Smaller community
- iOS-focused

## Selected Framework: WebDriverIO + Appium

Rationale.
- handles both JavaScript and native layers
- single codebase for iOS and Android
- type safety and better developer experience
- extensive documentation and community
- works well with GitHub Actions and BrowserStack

Cons.
- Setup complexity - requires Appium server and proper environment setup
- Execution speed** - slower than native frameworks like Detox
- Flakiness potential

## Improvements and Next Steps
- Add explicit wait and retry to improve Test Stability and reduce flaxiness
- Implement better element locator strategies
- Add test data management
- Increase test coverage
- Include visual regression testing
- Better test reporting
- Parallel test execution

## AI Usage & Judgement
Most Helpful.
- Troubleshoot complex setup issues
- Generating correct config files 
- Diagosis and solution for obscure errors
- Creating README and setup guide
- Setting up GitHub Action workflows

Least Helpful.
- Understanding unique application flow

## GitHub Actions

https://github.com/nihalalfred/feeld-automation-project/actions

## BrowserStack Dashboard

https://app-automate.browserstack.com/projects/Feeld+Automation/builds

## How to Run Automation Tests

#### Prerequisites
1. **Node.js** (v18 or higher)
2. **Java JDK** (11 or higher)
3. **Android SDK** (API 33+)
4. **Appium** (2.0+)

## Local Setup
```bash
# 1. Clone the repository
git clone <repository-url>
cd feeld-automation-project

# 2. Install dependencies
npm install

# 3. Set up Android environment
# Set ANDROID_HOME and ANDROID_SDK_ROOT environment variables
export ANDROID_HOME=/Users/username/Library/Android/sdk
export ANDROID_SDK_ROOT=$ANDROID_HOME
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# 4. Start Appium server (in separate terminal)
appium --allow-insecure chromedriver_autodownload

# 5. Start Android emulator or connect physical device
emulator -avd Pixel_4a_API_33

# 6. Run tests
npm test

# Run specific test suites
npm run test:login
npm run test:forms
npm run test:home
npm run test:all