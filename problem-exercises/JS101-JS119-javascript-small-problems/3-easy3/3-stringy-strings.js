const stringy = num => '10'.repeat(Math.ceil(num / 2)).slice(0, num);

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
