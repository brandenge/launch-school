/*
It was in an infinite loop because it was missing a conditional statement to terminate the loop. In this situation, JavaScript defaults the condition to true.
*/
for (let i = 0; ; i += 1) {
  console.log("and on");
  break;
}
