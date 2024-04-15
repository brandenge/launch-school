let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
let person = {}

for (subArr of nestedArray) {
  person[subArr[0]] = subArr[1];
}

console.log(person);

let person2 = Object.fromEntries(nestedArray);
console.log(person2);

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }
