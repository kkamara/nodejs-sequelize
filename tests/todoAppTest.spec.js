const assert = require('assert')
const { Key, By, } = require('selenium-webdriver')
const { driver, } = require('../test_config')

describe('Navigates to Sample Todo App', function() {
  it('test case should work', async function(done) {
    driver.get('https://lambdatest.github.io/sample-todo-app')
    driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium', Key.RETURN)
    driver.quit()
    done()
  })
})
