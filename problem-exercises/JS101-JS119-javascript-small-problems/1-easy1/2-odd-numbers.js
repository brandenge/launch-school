// Helper function used below - leave uncommented
// Range function wrapper around Array.from
function range(start, stop, step) {
  return Array.from(
    { length: ((stop - start) / step) + 1 }, (_, idx) => start + (idx * step)
  );
}

// Use a regular for loop
for (let idx = 1; idx < 100; idx += 2) {
  console.log(idx);
}

// Use a for-of loop and .entries method
for (let [idx] of Array(50).entries()) {
  console.log((idx * 2) + 1);
}

// Use a for-in loop with Array() and the spread operator
for (let idx in [...Array(50)]) {
  console.log((idx * 2) + 1);
}

// Use Array() to create an array iterator object and then use .keys()
// Only works with a for-of loop specifically
for (let num of Array(100).keys()) {
  if (num % 2 === 1) {
    console.log(num);
  }
}

// Create an array iterator object and then using .fill and .map
for (let num of Array(50).fill(0).map((_, idx) => (idx * 2) + 1)) {
  console.log(num);
}

// Use Array.from with an array
let arr = [...Array(50)];
for (let num of Array.from(arr, (_, idx) => (idx * 2) + 1)) {
  console.log(num);
}

// Use Array.from using the length property on an object
// Creates an array iterator
for (let num of Array.from({ length: 50 }, (_, idx) => (idx * 2) + 1)) {
  console.log(num);
}

for (let num of range(1, 99, 2)) {
  console.log(num);
}

// Use a generator function
function* range1(start, stop, step) {
  while (start <= stop) {
    yield start;
    start += step;
  }
}

for (let num of range1(1, 99 , 2)) {
  console.log(num);
}

// Use the yield* operator to delegate to another generator
function* range2(start, stop, step) {
  while (start <= stop) {
    yield start;
    start += step;
  }
}

function* otherGenerator() {
  yield* range2(1, 99, 2);
}

for (let num of otherGenerator()) {
  console.log(num);
}

// Create an iterator object that maintains its state and has a next method
const iterator = {
  data: range(1, 99, 2),
  currentIndex: 0,
  next: function() {
    if (this.currentIndex < this.data.length) {
      return {
        value: this.data[this.currentIndex++],
        done: false
      };
    } else {
      return { done: true };
    }
  }
};

// Iteration loop example #1
let nextItem = iterator.next();
while (!nextItem.done) {
  console.log(nextItem.value);
  nextItem = iterator.next();
}

// Iteration loop example #2
while (true) {
  const { value, done } = iterator.next();
  if (done) break;
  console.log(value);
}

// Create the same iterator object as a class
class Iterator {
  constructor(iterable) {
    this.currentIndex = 0;
    // The iterable passed in will have Symbol.iterator defined already
    this.items = iterable;
  }
  next() {
    if (this.currentIndex < this.items.length) {
      return {
        value: this.items[this.currentIndex++],
        done: false
      };
    } else {
      return { done: true };
    }
  }
  logger() {
    console.log(this.next().value);
  }
}

arr = range(1, 99, 2);
const iter = new Iterator(arr);
iter.logger();

// Create an iterable with [Symbol.iterator] defined so that
// it can be used like a generator, in a for-of loop, or the spread operator
const iterable = {
  items: range(1, 99, 2),
  [Symbol.iterator]: function() {
    let currentIndex = 0;
    return {
      next: function() {
        if (currentIndex < this.items.length) {
          return { value: this.items[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    };
  }
};

for (let val of iterable) {
  console.log(val);
}

console.log([...iterable]);

// Create the iterable as a class
class Iterable1 {
  constructor(iterable) {
    this.items = iterable;
  }

  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next: function() {
        if (currentIndex < this.items.length) {
          return { value: this.items[currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    };
  }
}

const iterable1 = new Iterable1(range(1, 99, 2));

for (let val of iterable1) {
  console.log(val);
}

console.log([...iterable1]);

// Create the iterable as a class using an instance variable to track the index
class Iterable2 {
  constructor(iterable) {
    this.items = iterable;
    this.currentIndex = 0;
  }

  [Symbol.iterator]() {
    // The fix
    if (this.currentIndex === this.items.length) {
      this.currentIndex = 0;
    }
    return {
      next: function() {
        if (this.currentIndex < this.items.length) {
          return { value: this.items[this.currentIndex++], done: false };
        } else {
          return { done: true };
        }
      }.bind(this)
    };
  }
}

let iterable2 = new Iterable2(range(1, 99, 2));

for (let val of iterable2) {
  console.log(val);
}

console.log([...iterable2]);
