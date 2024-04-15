function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction(); // logs => 1
/*
a is declared in outer scope, so it is accessible from the inside of the block.
*/
