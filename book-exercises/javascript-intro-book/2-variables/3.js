/*
What happens when you run the following program? Why do we get that result?

{
  let foo = 'bar';
}

console.log(foo);

The variable foo is undeclared and undefined outside of the block scope that another variable by the same name was declared and initialized. Therefore, JavaScript will throw a ReferenceError for an undefined variable because foo is not declared and initialized in the scope that it is being referenced outside of the block. JavaScript allows undeclared variables, but only if you initialize them to define them before you reference them.
*/
