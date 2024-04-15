// const substrings = (string) => {
//   return [...string].reduce((acc1, _, idx1) => {
//     return acc1.concat([...string.slice(0, idx1 + 1)]
//       .reduce((acc2, _, idx2) => acc2.concat([string.slice(idx2, idx1 + 1)])
//         , [])
//     );
//   }, []).sort();
// };

const leadingSubstrings = (string) => {
  return [...string].map((_, idx) => string.slice(0, idx + 1));
};

const substrings = (string) => {
  return [...string].reduce((acc, _, idx) => {
    return acc.concat(leadingSubstrings(string.slice(idx)));
  }, []);
};

console.log(substrings('abcde'));

// returns
// [
//   "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e"
// ]
