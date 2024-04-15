// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

const uniques = function(array) {
  const set = {};
  const uniques = [];

  for (const element of array) {
    if (!Object.hasOwn(set, element)) {
      uniques.push(element);
      set[element] = true;
    }
  }

  return uniques;
};

const smallerNumbersThanCurrent = function(numbers) {
  const uniqueNums = uniques(numbers);

  return numbers.map(num1 => uniqueNums.filter(num2 => num2 < num1).length);
};

// Examples:

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]
