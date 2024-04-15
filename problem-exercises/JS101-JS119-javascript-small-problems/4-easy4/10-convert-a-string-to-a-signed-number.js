function stringToSignedInteger(numberString) {
  let sign = 1;
  if (numberString[0] === '-') {
    numberString = numberString.slice(1);
    sign = -1;
  } else if (numberString[0] === '+') {
    numberString = numberString.slice(1);
  }

  return numberString.split('').reduce((total, digit) => {
    return (total * 10) + '0123456789'.indexOf(digit);
  }, 0) * sign;
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
