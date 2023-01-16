// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

function findSubarrays(arr, target) {

}

findSubarrays([2, 5, 3, 10], 30)//[2], [5], [2, 5], [3], [5, 3], [10] There are six contiguous subarrays whose product is less than the target.
findSubarrays([8, 2, 6, 5], 50)//[8], [2], [8, 2], [6], [2, 6], [5], [6, 5] There are seven contiguous subarrays whose product is less than the target.
findSubarrays([10, 5, 2, 6], 100)//The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].