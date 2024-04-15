/*
Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.
*/

const oddLengths = function(arr) {
  let arrayLengths = arr.map(str => str.length);
  return arrayLengths.filter(int => int % 2 === 1);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
