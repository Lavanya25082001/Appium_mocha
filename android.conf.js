const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");

// const appium = {
//   "platformName": "Android",
//   "appium:deviceName": "emulator-5554",
//   "appium:platformVersion": "14",
//   "appium:automationName": "UiAutomator2",
//   "appium:app":
//     "C:Users\ramesh.ganamanaDownloadsMondee-AutomationAppMondee_1.1.18_apkcombo.com.apk",
//   "appium:appPackage": "com.mondee.mobileapp",
//   "appium:appActivity": "com.flyex.T3.traveler.MainActivity",
//   "appium:autoAcceptAlerts": "true",
//   "appium:noReset": "false",
// };
// const appium = {
//   "platformName": "Android",
//   "appium:options": {
//     "automationName": "UiAutomator2",
//     "platformVersion": "14",
//     "deviceName": "emulator-5554",
//     "appium:appPackage": "com.dunzo.user",
//     "appium:appActivity": "in.dunzo.splashScreen.ui.SplashActivity",
//   },
// };
const appium={
  
    "platformName": "Android",
        "appium:options": {
          "automationName": "UiAutomator2",
          "platformVersion": "14",
          "deviceName": "emulator-5554",
          "appium:appPackage": "com.project.kiranchavan.detoxfree",
          "appium:appActivity": "com.project.kiranchavan.detoxfree.Language",
        
        }   
}
exports.config = merge(
  wdioConf.config,
  {
    capabilities: [appium],
  },
  { clone: false }
);
