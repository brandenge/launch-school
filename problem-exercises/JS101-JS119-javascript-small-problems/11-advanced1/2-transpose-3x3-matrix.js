const transpose = function(matrix) {
  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
      [matrix[rowIdx][colIdx], matrix[colIdx][rowIdx]] =
        [matrix[colIdx][rowIdx], matrix[rowIdx][colIdx]];
    }
  }
  return matrix;
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
