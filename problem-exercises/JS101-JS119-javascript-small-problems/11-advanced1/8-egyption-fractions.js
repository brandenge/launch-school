const Fraction = require('fraction.js');

const egyptian = function(num) {
  const denominators = [];
  let denominator = 1;

  while (num > new Fraction(0)) {
    const unitFraction = new Fraction(1 / denominator);
    if (num >= unitFraction) {
      denominators.push(denominator);
      num = num.sub(unitFraction);
    }
    denominator += 1;
  }

  return denominators;
};

const unegyptian = function(denominators) {
  return denominators.reduce(
    (sum, denominator) => sum + new Fraction(1, denominator), new Fraction(0)
  );
};

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130))));
// logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7))));
// logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3
