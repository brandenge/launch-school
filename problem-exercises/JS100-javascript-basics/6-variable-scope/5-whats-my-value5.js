function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
/*
Output:

ReferenceError: Cannot access 'a' before initialization

The reason for this is that at compile-time, it registers both variable declarations in their respective scopes. Let is still hoisted at compile time like var is, but unlike var, it is not initialized to anything (not even undefined) so any reference of it will throw a reference Error. This is what is known as a Temporal Dead Zone (TDZ).

So when the variable 'a' is declared within the inner scope of the if statement, the variable 'a' in the outer scope is inaccessible for the entire inner block of the if statement, not just until the point that the variable 'a' is declared in the inner scope of the if statement. This is because it is has the same name as the variable 'a' in the outer scope, which means that it shadows it, thereby making it inaccessible.

All of this scoping happens at compile-time, before run-time, but it stays that way at run-time too. Therefore the very first console.log causes the ReferenceError.
*/
