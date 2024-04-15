const merge = function(array1, array2) {
  const [copy1, copy2] = [array1.slice(), array2.slice()];
  const mergedArray = [];

  while (copy1.length > 0 && copy2.length > 0) {
    mergedArray.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return mergedArray.concat(copy1, copy2);
};

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
