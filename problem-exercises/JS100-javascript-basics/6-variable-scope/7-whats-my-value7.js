let a = 1;

function myFunction() {
  console.log(a);
}

myFunction(); // logs => 1

/*
Any variables declared at the top-most level of the code (which is the outermost scope) become global variables. This includes all types of variables - var, let, and const. Therefore, global variables are still accessible within the self-contained scope of functions.
*/
