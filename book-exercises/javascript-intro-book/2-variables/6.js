/*
Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

No, because the FOO inside of the block is being redeclared in a separate scope, so it is a totally separate variable, even if it is shadowing another const variable by the same name.

The console.log statement will output 'bar' from the first const FOO declaration outside of the block.
*/
