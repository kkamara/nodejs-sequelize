const { seleniumPort, } = require('./src/config')
const { Builder, Capabilities, } = require('selenium-webdriver')

const driver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .usingServer(`http://localhost:${seleniumPort}/wd/hub`)
  .build()

module.exports = { driver, }
