/*
What does the following program log to the console? Why?

'hi'
'hello'

Because foo is an object. Therefore it is mutable, and passed by reference into functions as arguments. Reassigning its properties in the function will mutate the object.

The variable qux is pointing to a string, which is a primitive data type, and therefore immutable (and atomic), which makes it pass by value. Therefore, the same string object is not being passed into the function, but rather a copy of that string object. At that point, the argument2 parameter is pointing to a different string object that happens to have the same value. And so when it gets reassigned, it is reassigning a totally separate variable.

Furthermore, nothing is returned from the function. So any reassignment within the function of an argument that is pass by value will be thrown away and not saved anywhere.

*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

let obj = {};

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, obj);

console.log(foo.a);
console.log(obj);
