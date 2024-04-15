function stringToInteger(numberString) {
  return numberString.split('').reduce((total, digit) => {
    return (total * 10) + '0123456789'.indexOf(digit);
  }, 0);
}

console.log(stringToInteger("4321") === 4321); // true
console.log(stringToInteger("570") === 570);   // true

const hexDigitsToDigits = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
};

function hexadecimalToInteger(numberString) {
  return numberString.split('').reduce((total, digit) => {
    return (total * 16) + hexDigitsToDigits[digit.toUpperCase()];
  }, 0);
}

console.log(hexadecimalToInteger('4D9f') === 19871); // true
