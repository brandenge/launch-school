class PerfectNumber {
  static classify(number) {
    if (number < 0) throw new Error();

    const aliquotSum = this.aliquotSum(number);

    if (aliquotSum === number) return 'perfect';
    else if (aliquotSum < number) return 'deficient';
    else return 'abundant';
  }

  static aliquotSum(number) {
    const divisors = [];

    for (let num = 1; num <= number / 2; num++) {
      if (number % num === 0) divisors.push(num);
    }

    return divisors.reduce((sum, num) => sum + num);
  }
}

module.exports = PerfectNumber;
