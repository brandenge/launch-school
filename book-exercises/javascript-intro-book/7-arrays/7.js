/*
Use reduce to compute the sum of the squares of all of the numbers in an array:

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

Note that 83 is 3*3 + 5*5 + 7*7.
*/

const sumOfSquares = function(arr) {
  return arr.reduce(((acc, val) => (val ** 2) + acc), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83
