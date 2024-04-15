/*
Explain why this code logs '510' instead of 15.

console.log('5' + 10);

JavaScript is going to perform an implicit type coercion on the number to convert it to a string so that it can use the concatenation operator correctly with 2 string operands.

Note that it considers the concatenation operator of higher precedence than the addition operator that uses the same characater (+).

"every + expression that has a string operand produces a string result no matter what the other operand is."
*/
