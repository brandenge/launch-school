/*
Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.
*/

const evenOrOdd = function(int) {
  if (!Number.isInteger(int)) {
    console.log('The argument to the evenOrOdd function must be an integer.');
  }

  if (int % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(0);
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(3);
evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(-0);
evenOrOdd(-1);
evenOrOdd(-2);
evenOrOdd(-3);
evenOrOdd(-4);
evenOrOdd(-5);
evenOrOdd(2342342);
evenOrOdd(12394023);
evenOrOdd('test');
evenOrOdd('12394023');
evenOrOdd(true);
