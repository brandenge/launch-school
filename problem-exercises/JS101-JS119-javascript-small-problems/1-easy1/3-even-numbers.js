class EvenNumbers {
  constructor(start, end) {
    this.start = start % 2 === 0 ? start : start + 1;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    return {
      next: function() {
        if (current <= this.end) {
          const nextVal = {
            value: current,
            done: false,
          };
          current += 2;
          return nextVal;
        } else {
          return { done: true };
        }
      }.bind(this)
    };
  }
}

const evenNumbers = new EvenNumbers(1, 99);
for (let num of evenNumbers) {
  console.log(num);
}
