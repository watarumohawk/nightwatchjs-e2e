module.exports = {
    "@tags": ["toppage"],
    "GitHub top page" : function (browser) {

        browser.url("https://github.com/")
            .waitForElementVisible("body", 10000)
            .assert.containsText("body", "GitHub")
            .saveScreenshot('screenshots/github-top.png')
            .end();
    }
};
