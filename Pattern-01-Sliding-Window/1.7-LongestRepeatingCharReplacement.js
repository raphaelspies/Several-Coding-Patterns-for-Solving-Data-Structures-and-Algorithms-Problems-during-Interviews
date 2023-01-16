// Given a string with lowercase letters only, if you are allowed to replace no more than ‘k’ letters with any letter, find the length of the longest substring having the same letters after replacement.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  let back = 0,
  maxLength = 0,
  maxRepeatLetterCount = 0,
  map = {};

  for (let front = 0; front < s.length; front++){
    //add frontElement to map
    let frontElement = s[front]
    if (!map[frontElement]) {
        map[frontElement] = 0
    }
    map[frontElement]++

    //keep track of the most commonly repeated letter, which WON'T be replaced
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, map[frontElement])

    //second trigger: if the TOTAL OF ALL OTHER ELEMENTS is greater than k,
    //shrink length of window by 1 so we only have k letters to replace
    if ((front - back + 1 - maxRepeatLetterCount) > k) {
        let backElement = s[back]
        map[backElement]--
        back++
      }
    //once we only have k letters to replace, we have our maxLength
    maxLength = Math.max(maxLength, front - back + 1)
  }
  return maxLength;
};

let result = characterReplacement("ABAB", 2)
let expected = 4
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = characterReplacement("AABABBA", 1)
expected = 4
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = characterReplacement("AAAA", 0)
expected = 4
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = characterReplacement("AAAB", 0)
expected = 3
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

//NOTE: cases 1-3 pass; 4 does not