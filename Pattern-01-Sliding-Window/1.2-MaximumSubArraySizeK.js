// Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

const max_sub_array_of_size_k = function(k, arr) {
  // TODO: Write your code here
  let maximum_subArray = 0;
  let sum_of_subArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sum_of_subArray += arr[i]
    if (i > k - 1){
      sum_of_subArray -= arr[i - k]
      if (sum_of_subArray > maximum_subArray) {
        maximum_subArray = sum_of_subArray
      }
    }
  }
  return maximum_subArray;
};
let result = max_sub_array_of_size_k(3, [2,1,5,1,3,2]	)
let expected = 9
console.log(`\n expected result is ${expected}, function returned ${result} \n`)