const assert = require('assert');
const { Builder, Capabilities, } = require('selenium-webdriver');
const config = require('./src/config');

describe('Load google', function() {
  it('test case should work', function() {
    const driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .usingServer(`http://localhost:${config.seleniumPort}/wd/hub`)
        .build();
    driver.get('https://www.google.com');
    driver.quit();
  });
});
