/*
Write some code to replace the value 6 in the following array with 606:

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];
You don't have to search the array. Just write an assignment that replaces the 6.
*/

let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr);
