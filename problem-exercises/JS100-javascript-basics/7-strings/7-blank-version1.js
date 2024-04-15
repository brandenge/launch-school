const isBlank = function(str) {
  console.log(!str);
  return !str;
}

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

/*
Other options:

!str.length
str.length === 0
str.length == false
*/
