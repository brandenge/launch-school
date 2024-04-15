class Scrabble {
  static POINTS = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  };

  constructor(word) {
    this.word = typeof word === 'string' ? word.trim().toUpperCase() : '';
  }

  score() {
    return [...this.word].reduce((sum, char) => sum + this.getPoints(char), 0);
  }

  getPoints(char) {
    for (const [points, chars] of Object.entries(Scrabble.POINTS)) {
      if (chars.includes(char)) return +points;
    }
    return 0;
  }

  static score(word) {
    return new Scrabble(word).score();
  }
}

module.exports = Scrabble;
