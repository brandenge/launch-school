const nextOddMultipleOfSeven = function(int) {
  let nextNum = int + (7 - (int % 7));
  return nextNum % 2 === 0 ? nextNum + 7 : nextNum;
};

const hasUniqueDigits = function(int) {
  const digitsCount = {};

  for (const digit of [...String(int)]) {
    if (digitsCount[digit]) return false;
    digitsCount[digit] = true;
  }
  return true;
};

const featured = function(int) {
  const MAX_FEATURED_NUMBER = 9876543201;
  let nextNum = nextOddMultipleOfSeven(int);

  while (!hasUniqueDigits(nextNum) && nextNum <= MAX_FEATURED_NUMBER) {
    nextNum += 14;
  }
  if (nextNum <= MAX_FEATURED_NUMBER) return nextNum;
  else return 'There is no possible number that fulfills those requirements.';
};

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."
