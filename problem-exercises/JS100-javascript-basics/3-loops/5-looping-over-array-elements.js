let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index += 1;
}

/* If the array was empty, it would not output anything. The loop would not execute at all, because the length of an empty array is 0, and 0 < 0 is false, thus the while loop condition to enter the loop would fail immediately. */
