const sizeSequence = function(size) {
  const sequence = [];

  for (let idx = 0; idx < (size / 2) - 1; idx++) {
    sequence.push(Math.floor(size / 2) - idx - 1);
  }

  return sequence.concat(-1, sequence.toReversed());
};

const star = function(size) {
  const sequence = sizeSequence(size);
  console.log({sequence});
  for (const int of sequence) {
    if (int === -1) console.log('*'.repeat(size));
    else console.log(' '.repeat(Math.floor(size / 2) - int - 1) +
      ['*', '*', '*'].join(' '.repeat(int)));
  }
};

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
