// Given an array of positive numbers and a positive number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’.

// Return 0 if no such subarray exists.

/**
* @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  let subTotal = 0,
      minLength = Infinity,
      back = 0;

  for (let front = 0; front < nums.length; front++) {
      subTotal += nums[front]

      while (subTotal >= target) {
          minLength = Math.min(minLength, front - back + 1)
          subTotal -= nums[back]
          back++
      }
  }
  if (minLength === Infinity) return 0;
  return minLength;
};

let result = minSubArrayLen(7, [2,3,1,2,4,3])
let expected = 2
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = minSubArrayLen(11, [1,1,1,1,1,1,1])
expected = 0
console.log(` expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")
