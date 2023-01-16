/**
 Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put the maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

Write a function to return the maximum number of fruits in both baskets.
* @param {number[]} fruits
 * @return {number}
 */

 var totalFruit = function(fruits) {
  //you have 2 baskets, each of which can hold 1 type of fruit
  let maxFruits = 0;
  let back = 0;
  let map = {};

  for (let front = 0; front < fruits.length; front++) {
      // add front element to map
      const frontElement = JSON.stringify(fruits[front])
      if (!map[frontElement]) {
          map[frontElement] = 1;
      } else {
          map[frontElement] += 1;
      }

      //once map contains greater than 2 types of fruit, remove fruit from back until only 2 types remain
      while (Object.keys(map).length > 2) {
          const backElement = JSON.stringify(fruits[back])
          if (map[backElement] === 1) {
              delete map[backElement]
          } else {
              map[backElement] -= 1
          }
          back++
      }
      maxFruits = Math.max(maxFruits, front - back + 1)
  }

  //return maximum # of fruits possible in 2 baskets
  return maxFruits
};

let result = totalFruit([1,2,1])
let expected = 3
console.log(`\n expected result is ${expected}, function returned ${result}`)
console.log( expected === result ? " Results Match\n" : "Results do not match\n")