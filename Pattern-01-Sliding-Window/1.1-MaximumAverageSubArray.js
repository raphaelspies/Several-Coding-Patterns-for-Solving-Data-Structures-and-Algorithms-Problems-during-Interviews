// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let back = 0,
        windowTotal = 0,
        maxAverage = -Infinity;

    for (let front = 0; front < nums.length; front++) {
        let frontElement = nums[front]
        windowTotal += frontElement

        if (front >= k - 1) {
            maxAverage = Math.max(maxAverage, windowTotal/k)
            let backElement = nums[back]
            windowTotal -= backElement
            back++
        }
    }
    return maxAverage;
};

let result = findMaxAverage([-1], 1)
let expected = -1
console.log(`\n expected result is ${expected}, function returned ${result} \n`)