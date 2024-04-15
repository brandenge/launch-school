const input = require('readline-sync');
const num = parseInt(input.question('Please enter an integer greater than 0: '), 10);
const operation = input.question('Enter "s" to compute the sum, or "p" to compute the product. ');

const ints = [...Array(num)].map((_, idx) => idx + 1);
switch (operation) {
  case 's': {
    const sum = ints.reduce((acc, num) => acc + num);
    console.log(`The sum of the integers between 1 and ${num} is ${sum}.`);
    break;
  }
  case 'p': {
    const product = ints.reduce((acc, num) => acc * num);
    console.log(`The product of the integers between 1 and ${num} is ${product}.`);
    break;
  }
}
