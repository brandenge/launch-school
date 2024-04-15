// Recursive solution fails for any length above about 1800
// due to stack overflow, depending on environment
// Note that it using a tail call. Tail call optimization would fix.
function findFibonacciIndexByLength(
  length, fibIdx = 2n, memo = {0: 0n, 1: 1n, 2: 1n}
) {
  memo[fibIdx] = memo[fibIdx - 1n] + memo[fibIdx - 2n];
  if (length === BigInt(memo[fibIdx].toString().length)) return fibIdx;
  return findFibonacciIndexByLength(length, fibIdx + 1n, memo);
}

function findFibonacciIndexByLength2(length) {
  let fibIdx = 2n;
  let prev = 1n;
  let curr = 1n;
  while (BigInt(curr.toString().length) !== length) {
    [prev, curr] = [curr, prev + curr];
    fibIdx++;
  }
  return fibIdx;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);


console.log(findFibonacciIndexByLength2(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength2(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength2(10n) === 45n);
console.log(findFibonacciIndexByLength2(16n) === 74n);
console.log(findFibonacciIndexByLength2(100n) === 476n);
console.log(findFibonacciIndexByLength2(1000n) === 4782n);
console.log(findFibonacciIndexByLength2(10000n) === 47847n);
// The last example may take a minute or so to run.
