/*
The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

The conditional statement for the while loop is broken. It is using an assignment operator, which returns the right operand of 1, which then gets evaluated as a truthy (implicit type coercion to the boolean value true), which then means that the loop condition will always evaluated.

Furthermore, although there is a break statement that could potentially break the loop, the counter variable never reaches the condition because it will always be re-assigned to 1 at the start of each iteration, and every time it reaches the conditional with the break statement, the counter variable will have the value of 2 (after the increment statement) which will evaluate false for the conditional with the break statement.
*/
