/*
Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

$ node greeter.js
What is your name? Sue
Hello, Sue!
*/

const rlSync = require('readline-sync');
let name = rlSync.question('What is your name?\n');
console.log(`Hello, ${name}!`);

/*
Browser Solution

let name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);
*/
