// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

const minimumSum = function(integers) {
  if (integers.length < 5) return null;
  let currentSum = integers.slice(0, 5).reduce((sum, num) => sum + num);
  let minSum = currentSum;

  for (let idx = 5; idx < integers.length; idx++) {
    currentSum = currentSum - integers[idx - 5] + integers[idx];
    minSum = Math.min(minSum, currentSum);
  }

  return minSum;
};

// Examples:

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".
