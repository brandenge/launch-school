function union(...numArrays) {
  numArrays = numArrays.flat();
  const set = {};
  const combinedArray = [];

  for (const num of numArrays) {
    if (!set[num]) combinedArray.push(num);
    set[num] = true;
  }

  return combinedArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
