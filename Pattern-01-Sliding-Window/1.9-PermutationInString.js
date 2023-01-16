// Given a string and a pattern, find out if the string contains any permutation of the pattern.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
  let map = {};
  let back = 0;
  let s1map = {};
	let isAMatchCount = 0;

  //create hashmap of s1
  for (let i = 0; i < s1.length; i++){
    let currentElement = s1[i]
    if (!s1map[currentElement]) s1map[currentElement] = 0;
    s1map[currentElement]++
  }

  //iterate over s2
  for (let front = 0; front < s2.length; front++){
    //add front element to hashmap
    let currentElement = s2[front]
    if (!map[currentElement]) map[currentElement] = 0;
    map[currentElement]++

    //remove back element from hashmap
    if (front >= s1.length) {
      let backElement = s2[back]
      map[backElement]--
      if (map[backElement] === 0) delete map[backElement]
			back++
    };

    //if the window length is the same length as s1, compare
    if (front - back === s1.length - 1) {
      const s1MapArray = Object.keys(s1map)
        //iterate over hashmap to see if it matches s1map
        for (let j of s1MapArray) {
          let s1Element = j
          if (map[s1Element] === s1map[s1Element]){
            isAMatchCount+= map[s1Element]
          } else {
            isAMatchCount = 0;
            break;
          }
        if (isAMatchCount === s1.length) return true;
        }
    }
  }
  return false
};

let result = checkInclusion( "ab", "eidbaooo")
let expected = true
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = checkInclusion( "ab", "eidboaoo")
expected = false
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = checkInclusion( "abb", "eidbabooo")
expected = true
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = checkInclusion( "a", "ab")
expected = true
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = checkInclusion( "ccc", "cbac")
expected = false
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = checkInclusion( "abcdxabcde", "abcdeabcdx")
expected = true
console.log(`\n expected result is ${expected}, function returned ${result}`)