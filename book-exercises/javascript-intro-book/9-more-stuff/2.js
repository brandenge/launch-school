/*
What do the following error message and stack trace tell you?

$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)

It tells us:
1) The name of the file (exercise2.js).
2) The line number that the error was first detected (line 4 from exercise2.js:4).
3) The line of code and the carrot symbol pointing to the exact spot that it thinks the error occurred on.
4) The type of error: ReferenceError.
5) A message that provides a clue for what caused the error: "greeting is not defined".
6) The name of the function that the error occurred in (hello).
7) The character/column number that the error was first detected (character/column 15 from exercise2.js:4:15).
8) The scope or object that the error occurred in (Object.anonymous, which is how it describes anything in global scope, presumably because the main stack frame is considered an anonymous function on the call stack).
9) The line number that the function that the error occurred in (hello) was called on (line 15)
10) Any other files/modules that the stack trace had to trace through, which in this case is a bunch of node modules.

*/
