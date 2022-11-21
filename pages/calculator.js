export class CalculatorPageObject {
    addOperator;
    subtractOperator;
    multiplyOperator;
    divisionOperator;
    equalOperator;
    clearOperator;
    outputText = 'com.android.calculator2.CalculatorEditText';
    idLocator = 'com.android.calculator2:id/';
    digitLocator = 'com.android.calculator2:id/digit';

    constructor() {
        this.addOperator = this.androidIDSelector(this.calcOperatorSelector('plus'));
        this.subtractOperator = this.androidIDSelector(this.calcOperatorSelector('minus'));
        this.multiplyOperator = this.androidIDSelector(this.calcOperatorSelector('mul'));
        this.divisionOperator = this.androidIDSelector(this.calcOperatorSelector('div'));
        this.equalOperator = this.androidIDSelector(this.calcOperatorSelector('equal'));
        this.clearOperator = this.androidIDSelector(this.calcOperatorSelector('allClear'));
        this.outputText = this.androidClassSelector(this.outputText);
    }

    calcDigitSelector = (selector) => {
        return this.androidIDSelector(this.digitLocator + selector);
    }

    androidIDSelector = (selector) => {
        let str = `'android=new UiSelector().resourceId("${selector}")'`;
        str = str.substring(1, str.length - 1);
        return str;
    }

    androidClassSelector = (selector) => {
        let str = `'android=new UiSelector().className("${selector}")'`;
        str = str.substring(1, str.length - 1);
        return str;
    }

    calcOperatorSelector = (selector) => {
        return this.idLocator + selector;
    }
}