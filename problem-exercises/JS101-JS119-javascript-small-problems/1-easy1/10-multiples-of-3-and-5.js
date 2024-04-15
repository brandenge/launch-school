function multisum(num) {
  return [...Array(num)].map((_, idx) => idx + 1)
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((sum, num) => sum + num);
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
