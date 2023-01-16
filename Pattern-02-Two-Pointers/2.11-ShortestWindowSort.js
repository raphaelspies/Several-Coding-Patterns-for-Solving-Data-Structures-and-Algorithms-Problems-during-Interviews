// Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

function shortestWindowSort(arr) {

}

shortestWindowSort([1,2,5,3,7,10,9,12])//5, We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
shortestWindowSort([1,3,2,0,-1,7,10])//5, We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
shortestWindowSort([1,2,3])//0, The array is already sorted
shortestWindowSort([3,2,1])// 3, The whole array needs to be sorted.