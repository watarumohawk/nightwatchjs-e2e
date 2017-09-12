module.exports = {
    "@tags": ["toppage"],
    "Amazon.co.jp top page" : function (browser) {

        browser.url("http://www.amazon.co.jp/")
            .waitForElementVisible("div#gw-mobile-herotator", 10000)
            .expect.element("div#a-page").text.to.contain("Amazon")
            .end();
    }
};
