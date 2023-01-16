const checkAnswerArray = require('../resources/checkAnswerArray.js')

// return the indices of the two values in array nums which add up to target
// assume that each problem has one solution

const twoSum = function(nums, target){
    const sorted = nums.sort((a, b) => (a-b))
    // pointers at start and end of array
    let start = 0;
    let end = nums.length - 1;

    //until the two pointers have reached each other
    while (start < end) {
        //add them together
        let currentSum = nums[start] + nums[end]
        //if they equal the target, return their value(s)
        if (currentSum === target) {
            return [start, end]
        }

        //otherwise.... if the sum is less than target, increase the start
        if (currentSum < target) {
            start++
        } else { // if the sum is greater than target, decrease the end
            end--
        }
    }
    return 0
}

let result = twoSum([1, 2, 3, 4, 6], 6)//[1,3]
let expected = [1, 3]
checkAnswerArray(result, expected)


result = twoSum([2, 5, 9, 11], 11)//[0,2]
expected = [0, 2]
checkAnswerArray(result, expected)
