const checkAnswerArray = require('../resources/checkAnswerArray.js')

/**
 * @param {number[]} nums
 * @return {number}
 */
 function removeDuplicates(arr) {
    let i = 1;
    let nextNonDupe = 1;

    while(i < arr.length) {
        if (arr[nextNonDupe-1] !== arr[i]) {
            arr[nextNonDupe] = arr[i]
            nextNonDupe++
        }
        i++
    }
    return nextNonDupe;
}
let result = removeDuplicates([2, 3, 3, 3, 6, 9, 9])//4, The first four elements after removing the duplicates will be [2, 3, 6, 9]
let expected = 4 //[2, 3, 6, 9]
checkAnswerArray(result, expected)