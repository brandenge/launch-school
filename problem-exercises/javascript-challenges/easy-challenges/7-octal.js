class Octal {
  constructor(octal) {
    if ([...octal].every(digit => '01234567'.includes(digit))) {
      this.octal = octal;
    } else {
      this.octal = '0';
    }
  }

  toDecimal() {
    return [...this.octal].reverse().reduce((sum, digit, index) => {
      return sum + (digit * (8 ** index));
    }, 0);
  }
}

module.exports = Octal;
