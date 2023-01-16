// Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

// A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.

/**
 * @param {string[]} words
* @return {string[]}
*/
var findAllConcatenatedWordsInADict = function(words) {

};

let result = findAllConcatenatedWordsInADict(["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"])
let expected = ["catsdogcats","dogcatsdog","ratcatdogcat"]
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = findAllConcatenatedWordsInADict(["cat","dog","catdog"])
expected = ["catsdogcats","dogcatsdog","ratcatdogcat"]
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")