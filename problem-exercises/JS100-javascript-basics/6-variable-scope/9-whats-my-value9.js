const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a); // logs => TypeError

/*
There is a TypeError for trying to reassign a const variable.

Note that there is also an extra argument being passed into the function. These will not throw any error, they will just be ignored.
*/
