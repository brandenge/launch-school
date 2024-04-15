// Solution 1
const rotate90 = function(matrix) {
  const rotated = [];

  for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
    rotated.push([]);
    for (let rowIdx = matrix.length - 1; rowIdx >= 0; rowIdx--) {
      rotated[colIdx][matrix.length - 1 - rowIdx] = matrix[rowIdx][colIdx];
    }
  }

  return rotated;
};

// Solution 2 - Transpose and reverse rows
const transpose = function(matrix) {
  const transposed = [];
  for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
    transposed.push([]);
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
      transposed[colIdx][rowIdx] = matrix[rowIdx][colIdx];
    }
  }
  return transposed;
};

const rotate90b = function(matrix) {
  const rotated = transpose(matrix);
  for (const row of rotated) {
    row.reverse();
  }
  return rotated;
};

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]

newMatrix1 = rotate90b(matrix1);
newMatrix2 = rotate90b(matrix2);
newMatrix3 = rotate90b(rotate90b(rotate90b(rotate90b(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
