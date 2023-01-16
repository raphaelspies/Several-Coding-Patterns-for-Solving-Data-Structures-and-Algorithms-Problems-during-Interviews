const assert = require('assert')

module.exports = function(result, expected) {
  console.log(`\n expected result is [${expected}], function returned [${result}]`)
  console.log(assert.deepEqual(result, expected), "results match")
}