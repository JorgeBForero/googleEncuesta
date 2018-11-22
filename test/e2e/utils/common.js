const TIMEOUT_MILLISECONDS = 3000;

class Common {
    static setValue(webElement, inputString) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        browser.element(webElement).setValue(inputString);
    }

    static getText(webElement) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        return browser.element(webElement).getText();
    }

    static click(webElement) {
        browser.element(webElement).waitForEnabled(TIMEOUT_MILLISECONDS);
        browser.element(webElement).click();
    }

    static waitForVisibility(webElement) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
    }

    static isVisible(webElement) {
        return browser.element(webElement).isVisible(TIMEOUT_MILLISECONDS);
    }

    static getTitle() {
        return browser.getTitle();
    }

    static getAttribute(webElement, attributeName) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        return browser.getAttribute(webElement, attributeName);
    }

    static check(webElement) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        if (!browser.element(webElement).isSelected()) {
            browser.element(webElement).click();
        }
    }

    static selectByValue(webElement, value) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        browser.selectByValue(webElement, value);
    }

    static selectByIndex(webElement, index) {
        browser.element(webElement).waitForVisible(TIMEOUT_MILLISECONDS);
        browser.selectByIndex(webElement, index);
    }

    static alertAccept() {
        if (browser.alertText()) {
            browser.alertAccept();
        }
    }

    static clickElementId(elementId) {
        browser.elementIdClick(elementId);
    }

    static getElementsId(webElement) {
        browser.element(webElement).waitForExist(TIMEOUT_MILLISECONDS);
        return browser.elements(webElement).value;
    }
}

module.exports = Common;
