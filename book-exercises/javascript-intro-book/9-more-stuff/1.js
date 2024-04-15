/*
What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

[1, 4, 3]

This is because on the 2nd line, both variables are pointing to the same object. And then the 3rd line reassigns one element within the object, which mutates the object itself, which both variables are pointing to. This does not affect the variables that are pointing to the object itself.

If the reassignment was on one of the variables itself, then that would affect what the variable is pointing to.

*/

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);
