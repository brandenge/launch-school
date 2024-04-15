const input = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;

console.log('Enter the length of the room in meters:');
const length = parseFloat(input.prompt());
console.log('Enter the width of the room in meters:');
const width = parseFloat(input.prompt());
const squareMeters = length * width;
const squareFeet = squareMeters * SQMETERS_TO_SQFEET;
console.log(`The area of the room is ${squareMeters.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`);
