class Anagram {
  constructor(word) {
    this.word = word.toLowerCase();
  }

  match(words) {
    return words.filter(word => {
      return word.toLowerCase() !== this.word &&
             this.isAnagram(word, this.word);
    });
  }

  sortedChars(word) {
    return [...word.toLowerCase()].sort();
  }

  isAnagram(word1, word2) {
    const sortedWord1 = this.sortedChars(word1).join('');
    const sortedWord2 = this.sortedChars(word2).join('');
    return sortedWord1 === sortedWord2;
  }
}

module.exports = Anagram;
