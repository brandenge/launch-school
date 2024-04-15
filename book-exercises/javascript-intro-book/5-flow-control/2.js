/*
Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.
*/

const evenOrOdd = function(int) {
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
