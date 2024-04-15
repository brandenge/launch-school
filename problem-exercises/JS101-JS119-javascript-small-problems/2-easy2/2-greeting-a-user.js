const input = require('readline-sync');
let name = input.question('What is your name? ');
if (name.endsWith('!')) {
  name = name.replace(/!/g, '');
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
