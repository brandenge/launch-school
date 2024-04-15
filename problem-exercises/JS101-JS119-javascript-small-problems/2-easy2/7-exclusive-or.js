const xor = (op1, op2) => (op1 && !op2) || (!op1 && op2);

console.log(xor(5, 0));          // true
console.log(xor(false, true));   // true
console.log(xor(1, 1));         // true
console.log(xor(true, true));   // true
