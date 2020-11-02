const wdio = require("webdriverio");
const path = require("path");
const assert = require('chai').assert;
const DEFAULT_ANDROID_PLATFORM_VERSION = process.env.SAUCE ? '7.1' : null;
const opts = {
    path: '/wd/hub',
    port: 4723,
    capabilities: {
        platformName: "Android",
        platformVersion: process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
        deviceName: "Android Emulator",
        app: path.resolve(__dirname, '..', 'apps', 'ApiDemos-debug.apk'),
        appPackage: "io.appium.android.apis",
        appActivity: ".view.TextFields",
        automationName: "UiAutomator2"
    }
};

async function main () {
    const client = await wdio.remote(opts);

    const field = await client.$("android.widget.EditText");
    await field.setValue("Hello World!");
    const value = await field.getText();
    assert.equal(value,"Hello World!");

    await client.deleteSession();
}

main();