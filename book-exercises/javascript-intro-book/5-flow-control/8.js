/*
Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

Expected Output

25 is between 0 and 50
75 is between 51 and 100
125 is greater than 100
-25 is less than 0
*/

const numberRange = function(num) {
  if (num < 0) {
  console.log(`${num} is less than 0`);
  } else if (num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else {
    console.log(`${num} is greater than 100`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
