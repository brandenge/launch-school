/*
Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

$ node greeter.js
What is your first name? Sue
What is your last name? Roberts
Hello, Sue Roberts!
*/

const rlSync = require('readline-sync');
let firstName = rlSync.question('What is your first name?\n');
let lastName = rlSync.question('What is your last name?\n');
console.log(`Hello, ${firstName} ${lastName}!`);
