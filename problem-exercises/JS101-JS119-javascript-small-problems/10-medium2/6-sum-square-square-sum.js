const sumSquareDifference = function(int) {
  let sum = 0;
  let squaresSum = 0;

  for (let num = 1; num <= int; num++) {
    sum += num;
    squaresSum += num ** 2;
  }
  return Math.abs(squaresSum - (sum ** 2));
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
