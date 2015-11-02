module.exports = {
    "@tags": ["toppage"],
    "Amazon.co.jp top page" : function (browser) {

        browser.url("http://www.amazon.co.jp/");

        browser
            .waitForElementVisible("div#a-page", 10000)
            .expect.element("div#a-page").text.to.contain("Amazon");

        browser.end();
    }
};
