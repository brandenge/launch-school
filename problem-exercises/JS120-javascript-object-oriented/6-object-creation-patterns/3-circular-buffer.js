class CircularBuffer {
  constructor(size) {
    this.size = size;
    this.buffer = [];
  }

  put(value) {
    this.buffer.push(value);
    if (this.buffer.length > this.size) this.buffer.shift();
  }

  get() {
    return this.buffer.shift() || null;
  }
}

let buffer = new CircularBuffer(3);
console.log(buffer.get() === null);

buffer.put(1);
buffer.put(2);
console.log(buffer.get() === 1);

buffer.put(3);
buffer.put(4);
console.log(buffer.get() === 2);

buffer.put(5);
buffer.put(6);
buffer.put(7);
console.log(buffer.get() === 5);
console.log(buffer.get() === 6);
console.log(buffer.get() === 7);
console.log(buffer.get() === null);

let anotherbuffer = new CircularBuffer(4);
console.log(anotherbuffer.get() === null);

anotherbuffer.put(1);
anotherbuffer.put(2);
console.log(anotherbuffer.get() === 1);

anotherbuffer.put(3);
anotherbuffer.put(4);
console.log(anotherbuffer.get() === 2);

anotherbuffer.put(5);
anotherbuffer.put(6);
anotherbuffer.put(7);
console.log(anotherbuffer.get() === 4);
console.log(anotherbuffer.get() === 5);
console.log(anotherbuffer.get() === 6);
console.log(anotherbuffer.get() === 7);
console.log(anotherbuffer.get() === null);

// class CircularBuffer {
//   constructor(size) {
//     this.buffer = Array(size).fill(null);
//     this.nextIndex = 0;
//     this.oldestIndex = 0;
//   }

//   put(value) {
//     if (this.buffer[this.nextIndex] !== null) {
//       this.oldestIndex = this.increment(this.oldestIndex);
//     }
//     this.buffer[this.nextIndex] = value;
//     this.nextIndex = this.increment(this.nextIndex);
//   }

//   get() {
//     const value = this.buffer[this.oldestIndex];
//     if (value !== null) {
//       this.buffer[this.oldestIndex] = null;
//       this.oldestIndex = this.increment(this.oldestIndex);
//     }
//     return value;
//   }

//   increment(index) {
//     return (index + 1) % this.buffer.length;
//   }
// }

// let buffer = new CircularBuffer(3);
// console.log(buffer.get() === null);

// buffer.put(1);
// buffer.put(2);
// console.log(buffer.get() === 1);

// buffer.put(3);
// buffer.put(4);
// console.log(buffer.get() === 2);

// buffer.put(5);
// buffer.put(6);
// buffer.put(7);
// console.log(buffer.get() === 5);
// console.log(buffer.get() === 6);
// console.log(buffer.get() === 7);
// console.log(buffer.get() === null);

// let anotherbuffer = new CircularBuffer(4);
// console.log(anotherbuffer.get() === null);

// anotherbuffer.put(1);
// anotherbuffer.put(2);
// console.log(anotherbuffer.get() === 1);

// anotherbuffer.put(3);
// anotherbuffer.put(4);
// console.log(anotherbuffer.get() === 2);

// anotherbuffer.put(5);
// anotherbuffer.put(6);
// anotherbuffer.put(7);
// console.log(anotherbuffer.get() === 4);
// console.log(anotherbuffer.get() === 5);
// console.log(anotherbuffer.get() === 6);
// console.log(anotherbuffer.get() === 7);
// console.log(anotherbuffer.get() === null);
