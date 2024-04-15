// Solution #1 - Unoptimized
const fibonacci1 = (nth) => {
  if (nth < 2) return nth;
  return fibonacci1(nth - 1) + fibonacci1(nth - 2);
};

// Solution #2 - Memoization with an object
const fibonacci2 = (nth, memo = {0: 0, 1: 1}) => {
  if (nth < 0) return nth;
  if (nth in memo) return memo[nth];
  memo[nth] = fibonacci2(nth - 1, memo) + fibonacci2(nth - 2, memo);
  return memo[nth];
};

// Solution #3 - Memoization with an array
const fibonacci3 = (nth, memo = [0, 1]) => {
  if (nth < memo.length) return memo[nth];
  const nextFib = fibonacci3(nth - 1, memo) + fibonacci3(nth - 2, memo);
  memo.push(nextFib);
  return nextFib;
};

console.log(fibonacci1(1));  // 1
console.log(fibonacci1(2));  // 1
console.log(fibonacci1(3));  // 2
console.log(fibonacci1(4));  // 3
console.log(fibonacci1(5));  // 5
console.log(fibonacci1(12)); // 144
console.log(fibonacci1(20)); // 6765

console.log(fibonacci2(1));  // 1
console.log(fibonacci2(2));  // 1
console.log(fibonacci2(3));  // 2
console.log(fibonacci2(4));  // 3
console.log(fibonacci2(5));  // 5
console.log(fibonacci2(12)); // 144
console.log(fibonacci2(20)); // 6765

console.log(fibonacci3(1));  // 1
console.log(fibonacci3(2));  // 1
console.log(fibonacci3(3));  // 2
console.log(fibonacci3(4));  // 3
console.log(fibonacci3(5));  // 5
console.log(fibonacci3(12)); // 144
console.log(fibonacci3(20)); // 6765
