/*
Write a program named greeter.js that greets 'Victor' three times. Your program should use a variable and not hard code the string value 'Victor' in each greeting. Here's an example run of the program:

$ node greeter.js
Good Morning, Victor.
Good Afternoon, Victor.
Good Evening, Victor.
*/

let name1 = 'Victor';
const greeter = function(name) {
  console.log(`Good Morning, ${name}.`);
  console.log(`Good Afternoon, ${name}.`);
  console.log(`Good Evening, ${name}.`);
}

greeter(name1);
