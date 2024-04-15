const mysteryMath = function(equation) {
  console.log(equation.replace(/[+\-*\/]/, '?'));
  return equation.replace(/[+\-*\/]/, '?');
}

mysteryMath('4 + 3 - 5 = 2');
// -> '4 ? 3 - 5 = 2'

mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 + 2) / 7 - 1 = 1'
