function multiplesOfThree() {
  let divisor = 1;

  for (let dividend = 3; dividend <= 30; dividend += 3) {
    console.log(dividend + ' / ' + divisor + ' = 3');
    divisor += 1;
  }
}

multiplesOfThree;

/*
There is no output because the function is not called. You need to add parenthesis like: () to invoke a function.

So the last line should be:

multiplesOfThree();

If that was fixed, then the output would be:

3 / 1 = 3
6 / 2 = 3
9 / 3 = 3
12 / 4 = 3
15 / 5 = 3
18 / 6 = 3
21 / 7 = 3
24 / 8 = 3
27 / 9 = 3
30 / 10 = 3
*/
