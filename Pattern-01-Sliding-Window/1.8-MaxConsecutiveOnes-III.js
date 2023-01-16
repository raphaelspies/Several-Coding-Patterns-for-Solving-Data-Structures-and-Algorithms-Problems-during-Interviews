// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * I: string of ones (desired), zeroes (can change)
 * O: integer value representing the maximum length achievable after changing k zeroes
 * C: only k zeroes can be changed, inputs can only be 0 or 1, k cannot be more than nums
 * E: k = nums.length, k is greater than the number of zeroes, is equal to the number of zeroes
 * Failure case (when you move the window up): when there are more than k zeroes in the window
 */
 var longestOnes = function(nums, k) {
  let back = 0,
    maxLength = 0,
    maxOnes = 0;

    //count through elements from the front until you've reached more than k zeroes
    for (let front = 0; front < nums.length; front++){
      let frontElement = nums[front]
      if (frontElement === 1) {
        maxOnes++
      }

      //once you've reached more than k zeroes, move the back of the window up
      //until there are less than k zeroes
      if ((front - back - maxOnes + 1 ) > k) { //NOTE: "if" works instead of "while" -- not sure why
        let backElement = nums[back]
        if (backElement === 1) {
          maxOnes--
        }
        back++
      }
      //update maxLength every iteration, but only if there are not more than k zeroes
      maxLength = Math.max(maxLength, front - back + 1)
    }
    return maxLength
};

let result = longestOnes( [1,1,1,0,0,0,1,1,1,1,0], 2)
let expected = 6
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")

result = longestOnes( [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)
expected = 10
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")
