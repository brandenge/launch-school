// 1
function delayLog() {
  for (let delay = 1; delay <= 10; delay++) {
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog();

// 2
function delayLog2() {
  // eslint-disable-next-line
  for (var delay = 1; delay <= 10; delay++) {
    // eslint-disable-next-line
    setTimeout(() => console.log(delay), delay * 1000);
  }
}

delayLog2();

// 3
setTimeout(function() {   // 1
  console.log('Once');    // 5
}, 1000);

setTimeout(function() {   // 2
  console.log('upon');    // 7
}, 3000);

setTimeout(function() {   // 3
  console.log('a');       // 6
}, 2000);

setTimeout(function() {   // 4
  console.log('time');    // 8
}, 4000);

// 4
// setTimeout(function() {
//   setTimeout(function() {
//     q();
//   }, 15);

//   d();

//   setTimeout(function() {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function() {
//   s();
// }, 20);

// setTimeout(function() {
//   f();
// });

// g();
// 1) g(), 2) f(), 3) d(), 4) z(), 5) n(), 6) s(), 7) q()

// 5
function afterNSeconds(callback, delay) {
  setTimeout(callback, delay * 1000);
}

afterNSeconds(() => console.log('test', 5));
