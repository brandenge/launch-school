/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Earlier, we learned that JavaScript has multiple versions of the numeric value zero. In particular, it has 0 and -0. These numbers, while being mathematically nonsensical, are distinct values in JavaScript. We won't get into why JavaScript has a 0 and -0, but it can be useful in some cases.

There's a problem, however: JavaScript itself doesn't seem to realize that the values are distinct:

> 0 === -0
= true

> String(-0)
= '0'
Fortunately, you can use Object.is to determine whether a value is -0:

> let value = -0;
> Object.is(value, 0)
= false

> Object.is(value, -0)
= true
There are other ways to detect a -0 value. Without using Object.is, write a function that will return true if the argument is -0, and false if it is 0 or any other number.
*/

const isNegZero = function(val) {
  return (val === 0) && (1 / val === -Infinity);
}

console.log(isNegZero(-0));
console.log(isNegZero(0));
console.log(isNegZero(-5));
console.log(isNegZero(5));
console.log(isNegZero('-0'));
console.log(isNegZero('0'));
console.log(isNegZero('-5'));
console.log(isNegZero('5'));
