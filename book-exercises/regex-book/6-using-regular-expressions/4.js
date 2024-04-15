const mysteriousMath = function(equation) {
  console.log(equation.replace(/[+\-*\/]/g, '?'));
  return equation.replace(/[+\-*\/]/g, '?');
}

mysteriousMath('4 + 3 - 5 = 2');
// -> '4 ? 3 ? 5 = 2'

mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1');
// -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'
