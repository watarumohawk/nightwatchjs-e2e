module.exports = {
    "@tags": ["toppage"],
    "Amazon.co.jp top page" : function (browser) {

        browser.url("http://www.amazon.co.jp/")
            .waitForElementVisible("body", 10000)
            .assert.containsText("div > .nav-right", "サインイン")
            .click("#nav-button-cart")
            .end();
    }
};
