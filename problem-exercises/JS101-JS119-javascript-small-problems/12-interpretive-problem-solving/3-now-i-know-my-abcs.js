// eslint-disable-next-line
Array.prototype.intersection = function(array) {
  return array.filter(elem => this.includes(elem));
};

const LETTER_BLOCKS = [
  ['B', 'O'],
  ['G', 'T'],
  ['V', 'I'],
  ['X', 'K'],
  ['R', 'E'],
  ['L', 'Y'],
  ['D', 'Q'],
  ['F', 'S'],
  ['Z', 'M'],
  ['C', 'P'],
  ['J', 'W'],
  ['N', 'A'],
  ['H', 'U'],
];

const isBlockWord = function(word) {
  return LETTER_BLOCKS.every(letterBlock => {
    return letterBlock.intersection([...word.toUpperCase()]).length < 2;
  });
};

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false
