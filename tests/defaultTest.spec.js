module.exports = {
  '@tags': ['beta'],
  'NW test on Google' : function (client) {
    client
      .useXpath()
      .url('http://www.google.com')
      .click('//button[@id="L2AGLb"]')
      .assert.title('Google')
      .click('//input[@id="gbqfbb"]')
      .pause(5000)
      .end()
  }
}
