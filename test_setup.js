const assert = require('assert');
const webdriver = require('selenium-webdriver');
const config = require('./src/config');

describe('Load google', function() {
  it('test case should work', function() {
    const driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .usingServer(`http://localhost:${config.seleniumPort}/wd/hub`)
        .build();
    driver.get('https://www.google.com');
    driver.quit();
  });
});
