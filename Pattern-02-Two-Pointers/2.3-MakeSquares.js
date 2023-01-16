const checkAnswerArray = require('../resources/checkAnswerArray.js')

// Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.

//since the squares of the negative numbers in the leftmost positions will be the largest positive values from negative numbers,
//it makes sense to fill the squares array in descending order. nextLargestSquare will fill squares from the right
//with whichever is greater: leftSquare(could be a negative number squared) or rightSquare(probably a greater number)
//once left & right meet, that means all elements have been visited at least once
const make_squares = function(arr) {
  const squares = new Array(arr.length);
  let left = 0, right = arr.length - 1;
  let nextLargestSquare = arr.length - 1

  while (left <= right) {
    let leftSquare = arr[left]**2
    let rightSquare = arr[right]**2
    if (leftSquare < rightSquare) {
      squares[nextLargestSquare] = rightSquare;
      right--
    } else {
      squares[nextLargestSquare] = leftSquare;
      left++
    }
    nextLargestSquare--
  }
  return squares;
}

let result = make_squares([-2,-1,0,2,3])
let expected = [0,1,4,4,9]
checkAnswerArray(result, expected)

result = make_squares([-3, -1, 0, 1, 2])
expected = [0, 1, 1, 4, 9]
checkAnswerArray(result, expected)
