// function interleave(arr1, arr2) {
//   return arr1.map((_, idx) => [arr1[idx], arr2[idx]]).flat();
// }

function interleave(arr1, arr2) {
  return arr1.reduce((acc, _, idx) => acc.concat([arr1[idx], arr2[idx]]), []);
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c'])); // [1, "a", 2, "b", 3, "c"]
