const isBlank = function(str) {
  if (str.match(/\S/)) return false;
  return true;
}

isBlank('mars'); // false
isBlank('  ');   // true
isBlank('');     // true

/*
Another option, per the solution below. This one below probably runs faster.

function isBlank(string) {
  return string.trim().length === 0;
}
*/
