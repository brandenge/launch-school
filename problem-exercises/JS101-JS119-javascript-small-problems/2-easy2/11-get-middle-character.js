function centerOf1(string) {
  const mid = parseInt(string.length / 2, 10);
  return string.length % 2 === 1 ? string[mid] : string.slice(mid - 1, mid + 1);
}

function centerOf2(string) {
  const mid = parseInt(string.length / 2, 10);
  if (string.length % 2 === 1) return string[mid];
  return string.substring(mid - 1, mid + 1);
}

function centerOf3(string) {
  return string.slice(
    parseInt((string.length - 1) / 2, 10),
    parseInt((string.length + 2) / 2, 10)
  );
}

console.log(centerOf1('I Love JavaScript')); // "a"
console.log(centerOf1('Launch School'));     // " "
console.log(centerOf1('Launch'));            // "un"
console.log(centerOf1('Launchschool'));      // "hs"
console.log(centerOf1('x'));                 // "x"

console.log(centerOf2('I Love JavaScript')); // "a"
console.log(centerOf2('Launch School'));     // " "
console.log(centerOf2('Launch'));            // "un"
console.log(centerOf2('Launchschool'));      // "hs"
console.log(centerOf2('x'));                 // "x"

console.log(centerOf3('I Love JavaScript')); // "a"
console.log(centerOf3('Launch School'));     // " "
console.log(centerOf3('Launch'));            // "un"
console.log(centerOf3('Launchschool'));      // "hs"
console.log(centerOf3('x'));                 // "x"
