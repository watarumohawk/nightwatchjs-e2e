module.exports = {
  "@tags": ["toppage"],
  "Amazon.co.jp top page" : function (browser) {

  var screenshots_dir = './screenshots/amazon/';
  
  browser
    .url("http://www.amazon.co.jp/")
    .waitForElementVisible("body", 3000)
    .saveScreenshot(screenshots_dir + 'Amazon.png')
    .end();
  }
};