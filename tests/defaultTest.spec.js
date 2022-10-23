module.exports = {
  '@tags': ['beta'],
  'NW test on Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .pause(1000)
      .end()
  }
}
