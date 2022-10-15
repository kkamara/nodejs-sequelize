const assert = require('assert')
const { driver, } = require('../test_config')

describe('Navigates to Google', function() {
  it('test case should work', async function(done) {
    driver.get('https://google.com')
    driver.quit()
    done()
  })
})
