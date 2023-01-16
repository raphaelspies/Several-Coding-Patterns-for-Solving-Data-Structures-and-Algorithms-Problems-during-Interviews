// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number} // the length of the array containing nums (but without val)
 */
const assert = require('assert')

 var removeElement = function(arr, key) {
    // let replaceHere = 0;

    //   //increment grabNext until target is found
    //   //when target is found, set replaceHere to that index
    //   //then, increment grabNext until next NON-target is found
    //   //then, set replaceHere to the next NON-target value
    //   //then, increment grabNext
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[replaceHere] === target) {
    //       while (arr[i] === target) {
    //         i++
    //       }
    //       arr[replaceHere] = arr[i]
    //     }
    //     replaceHere++
    //   }

    // console.log(arr)
    // return replaceHere;

    let nextElement = 0

  for(i = 0; i < arr.length; i++) {
    console.log(arr, i, nextElement)
    if(arr[i] !== key) {
      arr[nextElement] = arr[i]
      nextElement++
    }
  }
  return nextElement
};

// const nums = [0,1,2,2,3,0,4,2], val = 2
// result = 5, expectedNums = [0,1,4,0,3]
const nums = [1, 2, 2, 3, 4], val = 2
result = 3, expectedNums = [1, 3, 4]


let k = removeElement(nums, val); // Calls your implementation

assert.deepEqual(k, expectedNums.length, "results match")
// sort(nums, 0, k); // Sort the first k elements of nums
for (let i = 0; i < result; i++) {
    assert.deepEqual(nums[i], expectedNums[i]);
}