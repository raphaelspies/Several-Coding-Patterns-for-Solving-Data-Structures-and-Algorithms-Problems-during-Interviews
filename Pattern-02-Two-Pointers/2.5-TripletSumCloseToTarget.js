// Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

function tripletSumCloseToTarget(arr, targetSum){

}

tripletSumCloseToTarget([-2, 0, 1, 2], 2)//1, he triplet [-2, 1, 2] has the closest sum to the target.
tripletSumCloseToTarget([-3, -1, 1, 2], 1)//0, The triplet [-3, 1, 2] has the closest sum to the target.
tripletSumCloseToTarget([1, 0, 1, 1], 100)//3, The triplet [1, 1, 1] has the closest sum to the target.
tripletSumCloseToTarget([-1,2,1,-4], 1)//2, The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).