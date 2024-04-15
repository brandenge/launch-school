let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 === array2); // logs => false

/*
This is because although both arrays have identical elements, they are two separate arrays in memory. They have different memory addresses. And JavaScript's strict equality operator compares the actualy memory address.

Note that this is different in Ruby, which actually does compares the elements of an array and if two arrays are identical in their contents and order, then Ruby's strict equality operator would return true. In other words, Ruby compares the values of non-primitives in the same way as it does for primitives.
*/
