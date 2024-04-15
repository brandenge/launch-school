// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

const closestNumbers = function(integers) {
  const integersCopy = integers.slice();
  integersCopy.sort((a, b) => a - b);
  const diffs = [];

  for (let idx = 0; idx < integersCopy.length - 1; idx++) {
    diffs.push(Math.abs(integersCopy[idx] - integersCopy[idx + 1]));
  }

  const minIndex = diffs.indexOf(Math.min(...diffs));

  const [num1, num2] = [integersCopy[minIndex], integersCopy[minIndex + 1]];
  const [num1Idx, num2Idx] = [integers.indexOf(num1), integers.indexOf(num2)];

  if (num1Idx <= num2Idx) return [num1, num2];
  else return [num2, num1];
};

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
