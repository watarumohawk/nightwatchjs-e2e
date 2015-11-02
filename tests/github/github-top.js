module.exports = {
    "@tags": ["toppage"],
    "GitHub top page" : function (browser) {

        browser.url("https://github.com/");

        browser
            .waitForElementVisible("body", 10000)
            .expect.element("div.home-hero").text.to.contain("GitHub");

        browser.end();
    }
};
