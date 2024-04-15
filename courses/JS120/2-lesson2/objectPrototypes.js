// 4

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

// function assignProperty(obj, prop, val) {
//   while (obj) {
//     if (Object.hasOwn(obj, prop)) {
//       obj[prop] = val;
//       break;
//     }
//     obj = Object.getPrototypeOf(obj);
//   }
// }

function assignProperty(obj, prop, val) {
  if (obj === null);
  else if (Object.hasOwn(obj, prop)) obj[prop] = val;
  else assignProperty(Object.getPrototypeOf(obj), prop, val);
}

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false
