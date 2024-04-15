const diamond = function(num) {
  for (let idx = 1; idx <= num; idx += 2) {
    console.log(' '.repeat((num - idx) / 2) + '*'.repeat(idx));
  }

  for (let idx = num - 2; idx > 0; idx -= 2) {
    console.log(' '.repeat((num - idx) / 2) + '*'.repeat(idx));
  }
};

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
