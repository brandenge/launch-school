class RomanNumeral {
  static CONVERSIONS = {
    1: ['I', 'X', 'C', 'M'],
    2: ['II', 'XX', 'CC', 'MM'],
    3: ['III', 'XXX', 'CCC', 'MMM'],
    4: ['IV', 'XL', 'CD'],
    5: ['V', 'L', 'D'],
    6: ['VI', 'LX', 'DC'],
    7: ['VII', 'LXX', 'DCC'],
    8: ['VIII', 'LXXX', 'DCCC'],
    9: ['IX', 'XC', 'CM'],
    0: '',
  };

  number;

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    const digits = [...this.number.toString()].map(digit => +digit).reverse();
    const numerals = digits.map((digit, index) => {
      return RomanNumeral.CONVERSIONS[digit][index];
    });
    return numerals.reverse().join('');
  }
}

module.exports = RomanNumeral;
