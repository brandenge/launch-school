function sum(...values) {
  return values.reduce((sum, value) => sum + value);
}

console.log(sum(1, 4, 5, 6)); // 16
