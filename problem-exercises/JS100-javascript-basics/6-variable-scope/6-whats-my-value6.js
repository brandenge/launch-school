let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b); // logs => false

/*
The reason it still logs false is because it included the let keyword again to redeclare the variable 'b' inside the inner scope of the if statement. This creates a new variable with local block scope to just inside the if statement. This means that the = operation is initialization of a new variable 'b' in this inner scope, not reassignment of the previous variable 'b' in the outer sccope.

That variable is then destroyed after the if statement executes, and back in the outer scope, the console.log now references the variable 'b' first declared in outer scope, which still contains the value of false.
*/
