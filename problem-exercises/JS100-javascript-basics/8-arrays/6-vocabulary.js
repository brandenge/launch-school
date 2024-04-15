let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let words of vocabulary) {
  for (let word of words) {
    console.log(word);
  }
}

vocabulary.forEach(words => {
  words.forEach(word => console.log(word))
});

vocabulary.reduce((acc, sub) => acc = acc.concat(sub))
  .forEach(str => console.log(str));

// Expected output:
// happy
// cheerful
// merry
// etc...
