function isOdd1(num) {
  return num % 2 === 1;
}

function isOdd2(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd1(2)); // => false
console.log(isOdd1(5)); // => true
console.log(isOdd1(-17)); // => true
console.log(isOdd1(-8)); // => false
console.log(isOdd1(0)); // => false
console.log(isOdd1(7)); // => true

console.log(isOdd2(2)); // => false
console.log(isOdd2(5)); // => true
console.log(isOdd2(-17)); // => true
console.log(isOdd2(-8)); // => false
console.log(isOdd2(0)); // => false
console.log(isOdd2(7)); // => true
