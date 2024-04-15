/*
Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.
*/

let capitalizeLongString = function(str) {
  if (str.length > 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
}

console.log(capitalizeLongString('goodbye'));       // => goodbye
console.log(capitalizeLongString('hello world'));   // => HELLO WORLD
console.log(capitalizeLongString("Sue Smith"));     // => Sue Smith
console.log(capitalizeLongString("Sue Robertson")); // => SUE ROBERTSON
console.log(capitalizeLongString("Joe Thomas"));    // => Joe Thomas
console.log(capitalizeLongString("Joe Stevens"));   // => JOE STEVENS

// Ternary operatory version

capitalizeLongString = function(str) {
  return ((str.length > 10) ? str.toUpperCase() : str);
}

console.log(capitalizeLongString('goodbye'));       // => goodbye
console.log(capitalizeLongString('hello world'));   // => HELLO WORLD
console.log(capitalizeLongString("Sue Smith"));     // => Sue Smith
console.log(capitalizeLongString("Sue Robertson")); // => SUE ROBERTSON
console.log(capitalizeLongString("Joe Thomas"));    // => Joe Thomas
console.log(capitalizeLongString("Joe Stevens"));   // => JOE STEVENS
