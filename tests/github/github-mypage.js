module.exports = {
    "@tags": ["mypage"],
    "GitHub my page" : function (browser) {

        browser.url("https://github.com/watarumohawk");

        browser
            .waitForElementVisible("div.profile-header", 10000)
            .expect.element("body > div.profile-header > h3").text.to.equal("watarumohawk");

        browser.end();
    }
};
