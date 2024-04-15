class SumOfMultiples {
  constructor(...multiplesOf) {
    this.multiplesOf = multiplesOf;
  }

  to(number) {
    const multiplesOf = this.multiplesOf.filter(multipleOf => {
      return multipleOf < number;
    });
    return SumOfMultiples.to(number, multiplesOf);
  }

  static to(number, multiplesOf = [3, 5]) {
    const multiples = [];

    for (let num = 1; num < number; num++) {
      multiplesOf.forEach(multipleOf => {
        if (num % multipleOf === 0) {
          multiples.push(num);
        }
      });
    }

    return [...new Set(multiples)].reduce((sum, num) => sum + num, 0);
  }
}

module.exports = SumOfMultiples;
