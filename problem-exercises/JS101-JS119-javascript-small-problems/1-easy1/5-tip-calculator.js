const input = require('readline-sync');
const billAmount = parseFloat(input.question('What is the bill? '));
const tipRate = parseFloat(input.question('What is the tip percentage? '));
const tipAmount = billAmount * tipRate / 100;
const totalAmount = billAmount + tipAmount;
console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${totalAmount.toFixed(2)}`);
