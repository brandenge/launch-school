const multiplyAllPairs = (arr1, arr2) => {
  const products = [];

  arr1.forEach(int1 => {
    arr2.forEach(int2 => {
      products.push(int1 * int2);
    });
  });

  return products.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]
