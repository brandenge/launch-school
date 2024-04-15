/*
Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

The order of the array does not matter.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objKeys = Object.keys(obj);
upperKeys = objKeys.map(key => key.toUpperCase());

console.log(upperKeys);
console.log(obj);

// Using a for/in loop.

upperKeys2 = []
for (prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    upperKeys2.push(prop.toUpperCase());
  }
}

console.log(upperKeys2);
console.log(obj);
