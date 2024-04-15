// Solution #1 - Iterative
const fibonacci1 = (nth) => {
  let [prevFibNum, fibNum] = [0, 1];
  for (let idx = 0; idx < nth - 1; idx++) {
    [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
  }
  return fibNum;
};

// Solution #2 - Generator function
const fibonacciGenerator = function* () {
  let [prevFibNum, fibNum] = [0, 1];
  yield fibNum;
  while (true) {
    [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    yield fibNum;
  }
};

const fibonacci2 = (nth) => {
  const fibonacciIterator = fibonacciGenerator();
  let fibNum = 0;
  for (let idx = 0; idx < nth; idx++) {
    fibNum = fibonacciIterator.next().value;
  }
  return fibNum;
};

// Solution #3 - Iterator object
const fibonacciIterator = {
  prevFibNum: 0,
  fibNum: 1,
  fibIdx: 1,
  nth: 0,
  next: function() {
    [this.prevFibNum, this.fibNum] =
      [this.fibNum, this.prevFibNum + this.fibNum];
    this.fibIdx += 1;
    return { value: this.fibNum, done: false };
  }
};

const fibonacci3 = (nth) => {
  fibonacciIterator.nth = nth;
  while (true) {
    const fibNum = fibonacciIterator.next().value;
    if (fibonacciIterator.fibIdx >= nth) return fibNum;
  }
};

// Solution #4 - Iterator object as a class
class FibonacciIterator {
  constructor(nth) {
    this.nth = nth;
    this.prevFibNum = 0;
    this.fibNum = 1;
    this.fibIdx = 1;
    this.done = false;
  }

  next() {
    [this.prevFibNum, this.fibNum] =
      [this.fibNum, this.prevFibNum + this.fibNum];
    this.fibIdx += 1;
    if (this.fibIdx >= this.nth) this.done = true;
    return { value: this.fibNum, done: this.done };
  }
}

const fibonacci4 = (nth) => {
  const fibonacciIterator = new FibonacciIterator(nth);
  let fibNum;

  while (true) {
    fibNum = fibonacciIterator.next().value;
    if (fibonacciIterator.fibIdx >= nth) return fibNum;
  }
};

// Solution #5 - Construct an iterable object
// Placed outside the constructor function to avoid linter error
// eslint-disable-next-line max-lines-per-function
const fibonacciIterable = function(nth) {
  return {
    [Symbol.iterator]: function() {
      let prevFibNum = 0;
      let fibNum = 1;
      let fibIdx = 1;
      let done = false;

      // Returns iterator object
      return {
        next: function() {
          [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
          fibIdx += 1;
          // Return the last value before done
          if (fibIdx >= nth && !done) {
            done = true;
            return { value: fibNum, done: false };
          }
          return { value: fibNum, done: done };
        }.bind(this)
      };
    }
  };
};

const fibonacci5 = (nth) => {
  const fibonacciIter = new fibonacciIterable(nth);
  const fibonacciNumbers = [...fibonacciIter];
  return fibonacciNumbers.at(-1);
};

// Solution #6 - Instantiate iterable object from a class
class FibonacciIterable1 {
  constructor(nth) {
    this.nth = nth;
  }

  [Symbol.iterator]() {
    let prevFibNum = 0;
    let fibNum = 1;
    let fibIdx = 1;
    let done = false;

    // Returns iterator object
    return {
      next: function() {
        [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
        fibIdx += 1;
        // Return the last value before done
        if (fibIdx >= this.nth && !done) {
          done = true;
          return { value: fibNum, done: false };
        }
        return { value: fibNum, done: done };
      }.bind(this)
    };
  }
}

const fibonacci6 = (nth) => {
  const fibonacciIterable = new FibonacciIterable1(nth);
  const fibonacciNumbers = [...fibonacciIterable];
  return fibonacciNumbers.at(-1);
};

// Solution #7 - Generator function for [Symbol.iterator]
class FibonacciIterable2 {
  constructor(nth) {
    this.nth = nth;
  }

  *fibonacciGenerator () {
    let [prevFibNum, fibNum] = [0, 1];
    let fibIdx = 0;

    do {
      fibIdx += 1;
      yield fibNum;
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    } while (fibIdx < this.nth);
  }

  *[Symbol.iterator]() {
    // Yield to another generator function
    yield* this.fibonacciGenerator();
  }
}

const fibonacci7 = (nth) => {
  const fibonacciIterable = new FibonacciIterable2(nth);
  const fibonacciNumbers = [...fibonacciIterable];
  return fibonacciNumbers.at(-1);
};

// Solution #1
console.log(fibonacci1(1));        // 1
console.log(fibonacci1(20));       // 6765
console.log(fibonacci1(50));       // 12586269025
console.log(fibonacci1(75));       // 2111485077978050

// Solution #2
console.log(fibonacci2(1));        // 1
console.log(fibonacci2(20));       // 6765
console.log(fibonacci2(50));       // 12586269025
console.log(fibonacci2(75));       // 2111485077978050

// Solution #3
console.log(fibonacci3(1));        // 1
console.log(fibonacci3(20));       // 6765
console.log(fibonacci3(50));       // 12586269025
console.log(fibonacci3(75));       // 2111485077978050

// Solution #4
console.log(fibonacci4(1));        // 1
console.log(fibonacci4(20));       // 6765
console.log(fibonacci4(50));       // 12586269025
console.log(fibonacci4(75));       // 2111485077978050

// Solution #5
console.log(fibonacci5(1));        // 1
console.log(fibonacci5(20));       // 6765
console.log(fibonacci5(50));       // 12586269025
console.log(fibonacci5(75));       // 2111485077978050

// Solution #6
console.log(fibonacci6(1));        // 1
console.log(fibonacci6(20));       // 6765
console.log(fibonacci6(50));       // 12586269025
console.log(fibonacci6(75));       // 2111485077978050

// // Solution #7
console.log(fibonacci7(1));        // 1
console.log(fibonacci7(20));       // 6765
console.log(fibonacci7(50));       // 12586269025
console.log(fibonacci7(75));       // 2111485077978050
