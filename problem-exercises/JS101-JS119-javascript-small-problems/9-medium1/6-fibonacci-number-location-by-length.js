// Solution #1 - Iteratively, bottom-up
// No need for an array, saves memory
const findFibonacciIndexByLength1 = (numDigits) => {
  if (numDigits === 1n) return 1n;
  let [prevFibNum, currFibNum, currFibIdx] = [1n, 1n, 2n];

  while (String(currFibNum).length < numDigits) {
    [prevFibNum, currFibNum] = [currFibNum, prevFibNum + currFibNum];
    currFibIdx += 1n;
  }

  return currFibIdx;
};

// Solution #2 - Recursive, fails for inputs > ~6018n due to stack overflow
const findFibonacciIndexByLength2 =
  (numDigits, fibIdx = 1n, memo = [0n, 1n]) => {
    if (numDigits === 1n) return 1n;
    const currFibNum = memo.at(-1) + memo.at(-2);
    memo.push(currFibNum);
    if (BigInt(String(currFibNum).length) === numDigits) return fibIdx + 1n;
    return findFibonacciIndexByLength2(numDigits, fibIdx + 1n, memo);
  };

// Solution #3 - Generator function
const fibonacciGenerator = function* () {
  let [prevFibNum, fibNum, fibIdx] = [0n, 1n, 1n];
  yield [fibNum, fibIdx];
  while (true) {
    [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    fibIdx += 1n;
    yield [fibNum, fibIdx];
  }
};

const findFibonacciIndexByLength3 = (numDigits) => {
  const fibonacciIterator = fibonacciGenerator();

  while (true) {
    const [fibNum, fibIdx] = fibonacciIterator.next().value;
    if (String(fibNum).length >= numDigits) return fibIdx;
  }
};

// Solution #4 - Iterator object
const fibonacciIterator = {
  isFirstCall: true,
  prevFibNum: 0n,
  fibNum: 1n,
  fibIdx: 0n,
  next: function() {
    // Return the first value before getting the next number
    if (this.isFirstCall) this.isFirstCall = false;
    else [this.prevFibNum, this.fibNum] =
      [this.fibNum, this.prevFibNum + this.fibNum];

    this.fibIdx += 1n;
    return { value: [this.fibNum, this.fibIdx], done: false };
  }
};

const findFibonacciIndexByLength4 = (numDigits) => {
  while (true) {
    const [fibNum, fibIdx] = fibonacciIterator.next().value;
    if (String(fibNum).length >= numDigits) return fibIdx;
  }
};

// Solution #5 - Iterator object as a class
class FibonacciIterator {
  constructor() {
    this.isFirstCall = true;
    this.prevFibNum = 0n;
    this.fibNum = 1n;
    this.fibIdx = 0n;
  }

  next() {
    // Return the first value before getting the next number
    if (this.isFirstCall) this.isFirstCall = false;
    else [this.prevFibNum, this.fibNum] =
      [this.fibNum, this.prevFibNum + this.fibNum];

    this.fibIdx += 1n;
    return { value: [this.fibNum, this.fibIdx], done: false };
  }
}

const findFibonacciIndexByLength5 = (numDigits) => {
  const fibonacciIterator = new FibonacciIterator();
  while (true) {
    const [fibNum, fibIdx] = fibonacciIterator.next().value;
    if (String(fibNum).length >= numDigits) return fibIdx;
  }
};

// Solution #6 - Construct an iterable object

// Placed outside the constructor function to avoid linter error
const iterable = {
  numDigits: 0n,
  [Symbol.iterator]: function() {
    let isFirstCall = true;
    let prevFibNum = 0n;
    let fibNum = 1n;
    let done = false;

    // Returns iterator object
    return {
      next: function() {
        // Return the first value before getting the next number
        if (isFirstCall) isFirstCall = false;
        else [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];

        if (String(fibNum).length >= this.numDigits && !done) {
          done = true;
          // Return the last value before done
          return { value: fibNum, done: false };
        }

        return { value: fibNum, done: done };
      }.bind(this)
    };
  }
};

const fibonacciIterable = function() {
  return iterable;
};

const findFibonacciIndexByLength6 = (numDigits) => {
  const fibonacciIter = new fibonacciIterable();
  fibonacciIter.numDigits = numDigits;
  const fibonacciNumbers = [...fibonacciIter];
  return BigInt(fibonacciNumbers.length);
};

// Solution #7 - Instantiate iterable object from a class
class FibonacciIterable1 {
  constructor(numDigits) {
    this.numDigits = numDigits;
  }

  [Symbol.iterator]() {
    let isFirstCall = true;
    let prevFibNum = 0n;
    let fibNum = 1n;
    let done = false;

    // Returns iterator object
    return {
      next: function() {
        // Return the first value before getting the next number
        if (isFirstCall) isFirstCall = false;
        else [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
        if (String(fibNum).length >= this.numDigits && !done) {
          done = true;
          // Return the last value before done
          return { value: fibNum, done: false};
        }
        return { value: fibNum, done: done };
      }.bind(this)
    };
  }
}

const findFibonacciIndexByLength7 = (numDigits) => {
  const fibonacciIterable = new FibonacciIterable1(numDigits);
  const fibonacciNumbers = [...fibonacciIterable];
  return BigInt(fibonacciNumbers.length);
};

// Solution #8 - Generator function for [Symbol.iterator]
class FibonacciIterable2 {
  constructor(numDigits) {
    this.numDigits = numDigits;
  }

  *fibonacciGenerator () {
    let [prevFibNum, fibNum] = [0n, 1n];
    let isFirstCall = true;
    let done = false;
    while (!done) {
      // Return the first value before getting the next number
      if (isFirstCall) isFirstCall = false;
      else [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
      if (String(fibNum).length >= this.numDigits) done = true;
      yield fibNum;
    }
  }

  *[Symbol.iterator]() {
    // Yield to another generator function
    yield* this.fibonacciGenerator();
  }
}

const findFibonacciIndexByLength8 = (numDigits) => {
  const fibonacciIterable = new FibonacciIterable2(numDigits);
  const fibonacciNumbers = [...fibonacciIterable];
  return BigInt(fibonacciNumbers.length);
};

// Solution 1
console.log(findFibonacciIndexByLength1(1n) === 1n); // 1
console.log(findFibonacciIndexByLength1(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength1(3n) === 12n);
console.log(findFibonacciIndexByLength1(10n) === 45n);
console.log(findFibonacciIndexByLength1(16n) === 74n);
console.log(findFibonacciIndexByLength1(100n) === 476n);
console.log(findFibonacciIndexByLength1(1000n) === 4782n);
console.log(findFibonacciIndexByLength1(10000n) === 47847n);
// The last example may take a minute or so to run.

// Solution 2
console.log(findFibonacciIndexByLength2(1n) === 1n);
console.log(findFibonacciIndexByLength2(2n) === 7n);
console.log(findFibonacciIndexByLength2(3n) === 12n);
console.log(findFibonacciIndexByLength2(10n) === 45n);
console.log(findFibonacciIndexByLength2(16n) === 74n);
console.log(findFibonacciIndexByLength2(100n) === 476n);
console.log(findFibonacciIndexByLength2(1000n) === 4782n);
// Recursion fails this test due to stack overflow
// console.log(findFibonacciIndexByLength2(10000n) === 47847n);

// Solution 3
console.log(findFibonacciIndexByLength3(1n) === 1n);
console.log(findFibonacciIndexByLength3(2n) === 7n);
console.log(findFibonacciIndexByLength3(3n) === 12n);
console.log(findFibonacciIndexByLength3(10n) === 45n);
console.log(findFibonacciIndexByLength3(16n) === 74n);
console.log(findFibonacciIndexByLength3(100n) === 476n);
console.log(findFibonacciIndexByLength3(1000n) === 4782n);
console.log(findFibonacciIndexByLength3(10000n) === 47847n);

// Solution 4
console.log(findFibonacciIndexByLength4(1n) === 1n);
console.log(findFibonacciIndexByLength4(2n) === 7n);
console.log(findFibonacciIndexByLength4(3n) === 12n);
console.log(findFibonacciIndexByLength4(10n) === 45n);
console.log(findFibonacciIndexByLength4(16n) === 74n);
console.log(findFibonacciIndexByLength4(100n) === 476n);
console.log(findFibonacciIndexByLength4(1000n) === 4782n);
console.log(findFibonacciIndexByLength4(10000n) === 47847n);

// Solution 5
console.log(findFibonacciIndexByLength5(1n) === 1n);
console.log(findFibonacciIndexByLength5(2n) === 7n);
console.log(findFibonacciIndexByLength5(3n) === 12n);
console.log(findFibonacciIndexByLength5(10n) === 45n);
console.log(findFibonacciIndexByLength5(16n) === 74n);
console.log(findFibonacciIndexByLength5(100n) === 476n);
console.log(findFibonacciIndexByLength5(1000n) === 4782n);
console.log(findFibonacciIndexByLength5(10000n) === 47847n);

// Solution 6
console.log(findFibonacciIndexByLength6(1n) === 1n);
console.log(findFibonacciIndexByLength6(2n) === 7n);
console.log(findFibonacciIndexByLength6(3n) === 12n);
console.log(findFibonacciIndexByLength6(10n) === 45n);
console.log(findFibonacciIndexByLength6(16n) === 74n);
console.log(findFibonacciIndexByLength6(100n) === 476n);
console.log(findFibonacciIndexByLength6(1000n) === 4782n);
console.log(findFibonacciIndexByLength6(10000n) === 47847n);

// Solution 7
console.log(findFibonacciIndexByLength7(1n) === 1n);
console.log(findFibonacciIndexByLength7(2n) === 7n);
console.log(findFibonacciIndexByLength7(3n) === 12n);
console.log(findFibonacciIndexByLength7(10n) === 45n);
console.log(findFibonacciIndexByLength7(16n) === 74n);
console.log(findFibonacciIndexByLength7(100n) === 476n);
console.log(findFibonacciIndexByLength7(1000n) === 4782n);
console.log(findFibonacciIndexByLength7(10000n) === 47847n);

// Solution 8
console.log(findFibonacciIndexByLength8(1n) === 1n);
console.log(findFibonacciIndexByLength8(2n) === 7n);
console.log(findFibonacciIndexByLength8(3n) === 12n);
console.log(findFibonacciIndexByLength8(10n) === 45n);
console.log(findFibonacciIndexByLength8(16n) === 74n);
console.log(findFibonacciIndexByLength8(100n) === 476n);
console.log(findFibonacciIndexByLength8(1000n) === 4782n);
console.log(findFibonacciIndexByLength8(10000n) === 47847n);
