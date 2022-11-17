
exports.config ={
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: "info",
    framework: "mocha",
    mochaOpts: {
       ui: "bdd",
       require: ['@babel/register'],
       timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs: [
        //'./PlayWithMocha.js'
        //'./api/click.js'
        //'./api/setValue.js'
        //'./api/waitForDisplayed.js'
        //'./api/swSwitchitch.js'
        //'./api/saveScreenShot.js'
        './api/swipeHorizontal.js'
    ],
    capabilities: [{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "ce12160cf3e1703001",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity"
    }]
}