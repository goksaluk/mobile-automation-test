/**
 * Step Definitons are the glue code which drive
 * the feature scenarios, Cucumber helps us provide
 * gherkin language syntax's - Given, When, Then
 */

const { Given, When, Then } = require('cucumber');
import { expect } from 'chai';
import browser from 'webdriverio/build/commands/browser';

const calc = new CalculatorPageObject();


Given(/^the user on calculator app$/, () => {
    const title = browser.getText('android.widget.TextView');
    expect(title).to.equal('Calculator');
});

When(/^the user adds "(.*?)" and "(.*?)"$/, (num1, num2) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.addOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});


When(/^the user multiplies "(.*?)" with "(.*?)"$/, (num1, num2) => {
    browser.click(calc.calcDigitSelector(num1));
    browser.click(calc.multiplyOperator);
    browser.click(calc.calcDigitSelector(num2));
    browser.click(calc.equalOperator);
});

When(/^the user clicks on AC button$/, () => {
    browser.click(calc.clearOperator);
});

Then(/^the result "(.*?)" should be displayed$/, (result) => {
    return expect(browser.getText(calc.outputText)).to.contain(result);
});

Then(/^the result should be cleared$/, () => {
    return expect(browser.getText(calc.outputText)).to.equal('');
});