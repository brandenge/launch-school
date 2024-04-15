const DIGIT_WORDS = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

const wordToDigit = (string) => {
  return DIGIT_WORDS.reduce((acc, digitWord, idx) => {
    const regex = new RegExp(`\\b${digitWord}\\b`, 'gi');
    return acc.replace(regex, idx);
  }, string);
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
