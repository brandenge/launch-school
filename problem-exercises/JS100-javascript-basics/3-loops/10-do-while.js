/*
The top loop is a normal while loop, the condition is checked before the first iteration of the loop. This means that the loop is not guaranteed to execute even a single time.

The bottom loop is a do/while loop. In a do/while loop, the conditional statement is executed last, after each iteration of the loop. This guarantees that the block in the loop will execute at least once, even if it fails the conditional statement immediately.
*/

let counter = 0;

while (counter > 0) {
  console.log('Woooot!');
  counter -= 1;
}

do {
  console.log('Woooot!');
  counter -= 1;
} while (counter > 0);
