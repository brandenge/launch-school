function triangle(num) {
  for (let idx = 0; idx <= num; idx++) {
    console.log(' '.repeat(num - idx) + '*'.repeat(idx));
  }
}

triangle(5);
triangle(9);
