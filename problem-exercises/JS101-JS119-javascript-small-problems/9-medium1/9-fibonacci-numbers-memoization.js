// Solution #1 - Memoization with an object
const fibonacci1 = (nth, memo = {0: 0, 1: 1}) => {
  if (nth < 0) return nth;
  if (nth in memo) return memo[nth];
  memo[nth] = fibonacci1(nth - 1, memo) + fibonacci1(nth - 2, memo);
  return memo[nth];
};

// Solution #2 - Memoization with an array
const fibonacci2 = (nth, memo = [0, 1]) => {
  if (nth < memo.length) return memo[nth];
  const nextFib = fibonacci2(nth - 1, memo) + fibonacci2(nth - 2, memo);
  memo.push(nextFib);
  return nextFib;
};

console.log(fibonacci1(1));        // 1
console.log(fibonacci1(20));       // 6765
console.log(fibonacci1(50));       // 12586269025
console.log(fibonacci1(75));       // 2111485077978050

console.log(fibonacci2(1));        // 1
console.log(fibonacci2(20));       // 6765
console.log(fibonacci2(50));       // 12586269025
console.log(fibonacci2(75));       // 2111485077978050
