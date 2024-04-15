'use strict';

const { question } = require('readline-sync');

let numbers = [];
const orderWords = ['1st', '2nd', '3rd', '4th', '5th', 'last'];

for (let idx = 0; idx < 6; idx++) {
  const number = question(`Enter the ${orderWords[idx]} number: `);
  numbers.push(number);
}

console.log('');

const lastNumber = numbers.pop();

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${numbers.join(',')}.`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${numbers.join(',')}.`);
}
