/*
Take a look at this code snippet:

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?

This will output 'bar' because the only foo variable accessible from the scope outside of the block, is the one that was declared outside of the block. The foo variable inside of the block is declared separately and in a different scope, so it is a totally separate variable. With the variable names being the same, the foo inside the block is shadowing the variable foo outside of the block, so the variable foo outside of the block is actually also not accessible inside of the block because the same name is being used, which shadows it.
*/
