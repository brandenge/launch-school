if (true) {
  let myValue = 20;
}

console.log(myValue);
/*
ReferenceError: myValue is not defined

myValue is declared inside of a block, so it is local to that block.
It is also a let variable, and let variables have block scope.
In JavaScript, even if statements create blocks.
*/
