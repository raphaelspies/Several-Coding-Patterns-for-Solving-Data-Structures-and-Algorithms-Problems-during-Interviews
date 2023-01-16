// function find_averages_of_subarrays(K, arr) {
// 	const result = [];
// 	for (let i = 0; i < arr.length - K + 1; i++) {
// 		sum = 0.0;
// 		for (let j = i; j < i + K; j++) {
// 			sum += arr[j];
// 		}
// 		result.push(sum/ K)
// 	}
// 	return result;
// }

// const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
// console.log(`Averages of subarrays of size K: ${result}`);

function find_averages_of_subarrays(K, arr) {
  let results = [],
    windowSum = 0,
    end = 0;

  for (let front = 0; front < arr.length; front++) {
    let frontElement = arr[front]
    windowSum += frontElement;

    if (front <= K) {
      results.push(windowSum/K)
    }
  }
  return results;
}

let result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2])
console.log(`Averages of subarrays of size K: ${result}`);
