function signedIntegerToString(integer) {
  if (1 / integer === -Infinity) return '-0';
  if (1 / integer === Infinity) return '0';

  let sign = '';
  if (integer < 0) {
    sign = '-';
    integer *= -1;
  } else if (integer > 0) {
    sign = '+';
  }

  const digits = [];

  while (integer > 0) {
    const digit = integer % 10;
    digits.push('0123456789'[digit]);
    integer = Math.floor(integer / 10);
  }
  digits.reverse();

  return sign + digits.join('');
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
