let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b); // logs => 2

/*
The variable 'a' inside of the parenthesis is a function parameter, which is a separate variable that gets created and initialized at the moment the function is called. It is separate from the variable 'a' in the top-most level of the code.

When the function is called, the value 2, which is contained in variable 'b', gets passed as an argument to the function's parameter variable named 'a'.

The parameter variable 'a' has the same name as the global variable 'a', and so it shadows it inside of the function body, making the global variable 'a' inaccessible from within the scope of the funciton body. And so this is what gets logged to the console.

If the function parameter had a different name, then it would not shadow the global variable 'a', and then 1 would get logged to the console in that case. Or else the global variable 'a' has to be directly passed in as the function's argument when it is called.
*/
