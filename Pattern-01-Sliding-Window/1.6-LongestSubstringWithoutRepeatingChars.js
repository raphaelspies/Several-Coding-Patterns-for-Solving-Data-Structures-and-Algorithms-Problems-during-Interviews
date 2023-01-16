// Given a string, find the length of the longest substring, which has no repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  //create a set
  let back = 0,
      maxSubstring = 0,
      set = {};

  //sliding window
  for (let front = 0; front < s.length; front++) {
      let frontElement = s[front];
      if (!set[frontElement]) {
          set[frontElement] = 0;
      }
      set[frontElement]++

      //if the index of the set is greater than 1, move back
      while(set[frontElement] > 1) {
          let backElement = s[back]
          set[backElement]--
          if (set[backElement] === 0) delete set[backElement]
          back++
      }
      //remember the max length so far
      maxSubstring = Math.max(maxSubstring, front - back + 1)
      //update maxSubstring
  }
  return maxSubstring
};

let result = lengthOfLongestSubstring("abcabcbb")
let expected = 3
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")