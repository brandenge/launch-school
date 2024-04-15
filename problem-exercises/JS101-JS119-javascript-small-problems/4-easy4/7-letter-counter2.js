function wordSizes(string) {
  const words = string.split(' ').map(word => word.replace(/[^a-z]/gi, '')).filter(word => word.length > 0);
  const wordSizeCounts = {};

  for (const word of words) {
    wordSizeCounts[word.length] ||= 0;
    wordSizeCounts[word.length] += 1;
  }

  return wordSizeCounts;
}

console.log(wordSizes('Four score and seven.'));
// { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));
// { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));
// {}
