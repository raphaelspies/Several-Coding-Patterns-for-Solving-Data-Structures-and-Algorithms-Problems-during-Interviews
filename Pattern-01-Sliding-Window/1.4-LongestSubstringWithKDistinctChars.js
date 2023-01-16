/*
Given a string, find the length of the longest substring in it with no more than K distinct characters.

You can assume that K is less than or equal to the length of the given string.
*/

const longest_substring_with_k_distinct = function(str, k) {
  let windowLength = 0,
      back = 0,
      longestSubstring = 0;
  let map = {};

  for (let front = 0; front < str.length; front++) {
    //add front element to map
    if (!map[str[front]]) {
      map[str[front]] = 1
      windowLength++
    } else {
      map[str[front]] += 1
      windowLength++
    }
    //check if substring contains k letters
    while (Object.keys(map).length > k) {
      //if so, delete letters from the back until only k letters remain
      if (map[str[back]] > 1) map[str[back]] -= 1
      else delete map[str[back]]
      //move up "back", and decrement windowlength
      back++
      windowLength--
    }
    //once only k letters remain, see if the windowLength is the biggest seen so far
    longestSubstring = Math.max(longestSubstring, windowLength)
  }

  return longestSubstring;
};

let result = totalFruit([1,2,1])
let expected = 3
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")