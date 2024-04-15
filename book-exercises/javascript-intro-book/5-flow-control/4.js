/*
What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

--

Output

Product2
Product3
Product not found!

The case clauses don't have break statements, so if any one of them evaluates as true to be executed, then the flow of control (i.e. the execution) will "fall through" and execute all the remaining case clauses afterwards by default, even if they don't evaluate true.
*/
