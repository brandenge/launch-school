// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

const toWeirdCase = function(string) {
  const result = string.split(' ').map((word, wordIdx) => {
    return word.split('').map((char, charIdx) => {
      if ((wordIdx + 1) % 2 === 0 && (charIdx + 1) % 4 === 0) {
        return char.toUpperCase();
      } else {
        return char;
      }
    }).join('');
  }).join(' ');

  return result;
};

// Examples:

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".
