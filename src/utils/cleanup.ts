export async function quitApp() {
    await driver.execute('mobile: terminateApp', {
        appId: 'com.wdiodemoapp'
    });
}