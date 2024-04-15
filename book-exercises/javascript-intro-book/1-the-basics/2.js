/*
Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

thousands place is 4
hundreds place is 9
tens place is 3
ones place is 6
*/

// Arithmetic Operators

console.log((4936 - (4936 % 1000)) / 1000); // 4
console.log((4936 - (4936 % 100)) / 100 % 10); // 9
console.log((4936 - (4936 % 10)) / 10 % 10); // 3
console.log(4936 % 10); // 6

console.log(Math.trunc(4936 / 1000)); // 4
console.log(Math.trunc((4936 % 1000) / 100)); // 9
console.log(Math.trunc((4936 % 100) / 10)); // 3
console.log(4936 % 10); // 6

// No Loop version.

const digitsToArray1 = function(num) {
  numStr = String(num).replace(/[^0-9]/g, '');
  digitsArray = numStr.split('');
  digitsArray = digitsArray.map(num => Number(num));
  return digitsArray;
}

console.log(digitsToArray1(4936));
console.log(digitsToArray1(-56.78));

// For loop version.

const digitsToArray2 = function(num) {
  digitsArray = [];
  numStr = String(num).replace(/[^0-9]/g, '');
  length = numStr.length - 1;
  for (let i = 0; i <= length; i++) {
    digitsArray.unshift(Number(numStr) % 10);
    numStr = numStr.slice(0, Number(numStr.length - 1));
  }
  return digitsArray;
}

console.log(digitsToArray2(4936));
console.log(digitsToArray2(-56.78));

// Recursive version.

const digitsToArray3 = function(num, digitsArray) {
  if (String(num).length === 0) {return digitsArray};
  numStr = String(num).replace(/[^0-9]/g, '');
  digitsArray.unshift(Number(numStr) % 10);
  numStr = numStr.slice(0, Number(numStr.length - 1));
  return digitsToArray3(numStr, digitsArray);
}

console.log(digitsToArray3(4936, []));
console.log(digitsToArray3(-56.78, []));
