module.exports = {
    "@tags": ["mypage"],
    "GitHub my page" : function (browser) {

        browser.url("https://github.com/watarumohawk")
            .waitForElementVisible("div.profile-header", 10000)
            .assert.containsText("body > div.profile-header", "watarumohawk")
            .end();
    }
};
