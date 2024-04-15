const rotateDigit = (digits, index) => digits.push(digits.splice(index, 1));

const maxRotation = (num) => {
  const digits = [...String(num)];
  digits.forEach((_, idx) => rotateDigit(digits, idx));
  return +digits.join('');
};

console.log(maxRotation(735291));
// 321579
console.log(maxRotation(3));
// 3
console.log(maxRotation(35));
// 53
console.log(maxRotation(105));
// 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));
// 7321609845
