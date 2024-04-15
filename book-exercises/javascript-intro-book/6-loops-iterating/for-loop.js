// Testing when the increment happens in a for loop.
arr = ['a', 'b', 'c', 'd', 'e', 'f'];

for (i = 0; i < arr.length; i++) {
  console.log(`i at the start of the loop is ${i}`);
  if (arr[i] === 'c') continue;
  console.log(`The array element is ${arr[i]}`);
  console.log(`i at the end of the loop is ${i}`);
}
