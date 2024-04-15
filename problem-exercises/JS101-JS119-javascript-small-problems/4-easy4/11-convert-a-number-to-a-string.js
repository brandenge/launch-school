function integerToString(integer) {
  if (integer === 0) return '0';
  const digits = [];

  while (integer > 0) {
    const digit = integer % 10;
    digits.push('0123456789'[digit]);
    integer = Math.floor(integer / 10);
  }
  digits.reverse();

  return digits.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"
