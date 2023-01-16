const checkAnswerArray = require('../resources/checkAnswerArray.js')

// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

const search_triplets = function(arr) {
  triplets = [];
  let sorted = arr.sort((a, b) => (a - b))

  let front = 0;
  let back = sorted.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (arr.indexOf(0) > - 1 && arr.indexOf(0) !== front) {
      continue;
    }
    let target = currentElement * - 1
    search_pair()
  }

  return triplets;
};

const search_pair = function(){

}

let result = search_triplets([-3, 0, 1, 2, -1, 1, -2])
let expected = [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
checkAnswerArray(result, expected)

result = search_triplets([-5, 2, -1, -2, 3])
expected = [[-5, 2, 3], [-2, -1, 3]]
checkAnswerArray(result, expected)
