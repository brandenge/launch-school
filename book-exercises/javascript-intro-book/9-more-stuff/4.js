/*
Given a list of numbers, write some code to find and display the largest numeric value in the list.

List :	Max
1, 6, 3, 2 :	6
-1, -6, -3, -2 :	-1
2, 2 :	2
*/

console.log(Math.max(1, 6, 3, 2));
console.log(Math.max(-1, -6, -3, -2));
console.log(Math.max(2, 2));

const maxNum = function(numArr) {
  return numArr.reduce((acc, val) => acc > val ? acc : val);
}

arr1 = [1, 6, 3, 2];
arr2 = [-1, -6, -3, -2];
arr3 = [2, 2];

console.log(maxNum(arr1));
console.log(maxNum(arr2));
console.log(maxNum(arr3));
