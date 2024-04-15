const merge = function(array1, array2) {
  const [copy1, copy2] = [array1.slice(), array2.slice()];
  const mergedArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    mergedArray.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return mergedArray.concat(copy1, copy2);
};

const mergeSort = function(array) {
  if (array.length <= 1) return array;
  let leftHalf = array.slice(0, array.length / 2);
  let rightHalf = array.slice(array.length / 2);
  leftHalf = mergeSort(leftHalf);
  rightHalf = mergeSort(rightHalf);
  return merge(leftHalf, rightHalf);
};

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort(
  [7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]
));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
