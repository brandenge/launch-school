/*
What happens when you run the following code? Why?

const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

The first 3 console.logs will output properly until it reaches the line to assign NAME to 'Joe'. This will throw an error because you cannot re-assign a constant. Constants are only intitialized once on the same line that they are declared from, and then that is it. The assignment operator does not work on constants.

The last 3 console.log lines will not be output because the error will halt the execution of the program. However, when copy/pasting into the node REPL, it works because it executes each line separately, line by line.
*/
