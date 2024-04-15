/*
What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

Outout:
1

Executing the foo function does not affect the output because its variable is being redeclared inside of its scope. The redeclaration makes it an initialization operation instead of a re-assignment operation. This makes it a separate variable that is local to its function body.

If the variable was not redeclared, then it would be a re-assignment of the same foo variable declared outside of the function body, which would then change the output to 2.
*/
