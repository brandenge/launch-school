// 1
let arr = ['10', '11', '9', '7', '8'];
arr.sort((a, b) => +b - +a);
console.log({arr});

// 2
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];
books.sort((a, b) => +a.published - +b.published);
console.log({books});

// 3
let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);

// 4
arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
console.log({arr1});

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
console.log({arr2});

obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
console.log({obj1});

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
console.log({obj2});

// 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

const sumMaleAges = Object.values(munsters)
  .filter(munster => munster.gender === 'male')
  .map(munster => munster.age)
  .reduce((sum, age) => sum + age);
console.log({sumMaleAges});

// 6
munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(([name, munster]) => {
  console.log(`${name} is a ${munster.age}-year old ${munster.gender}.`);
});

// 7
// a => 2
// b => [ 3, 8 ]
// arr => [ 4, [ 3, 8 ] ]

// 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).flat().join().split('').filter(char => 'aeiou'.includes(char)).forEach(vowel => console.log(vowel));

// 9
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
arr = arr.map(subArr => {
  return typeof subArr[0] === 'number' ?
    [...subArr].sort((a, b) => a - b) :
    [...subArr].sort();
});
console.log({arr});

// 10
arr = arr.map(subArr => {
  return typeof subArr[0] === 'number' ?
    [...subArr].sort((a, b) => b - a) :
    [...subArr].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
});
console.log({arr});

// 11
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

arr = arr.map(obj => Object.assign({}, obj)).map(obj => {
  Object.entries(obj).forEach(([key, val]) => {
    obj[key] = val + 1;
  });
  return obj;
});
console.log(arr);

// 12
arr = [
  ['b', 'c', 'a'],
  ['blue', 'black', 'green'],
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

arr = arr.map(sub => {
  if (Array.isArray(sub)) {
    return [...sub];
  } else {
    let copy = Object.assign({}, sub);
    Object.entries(copy).forEach(([key, val]) => {
      copy[key] = [...val];
    });
    return copy;
  }
});
console.log({arr});

const deepCopy = JSON.parse(JSON.stringify(arr));
console.log({deepCopy});

// 13
let truthiness = {
  falsy: [ null, undefined, '', false, NaN, 0 ],
  truthy: ['everything else...']
};

truthiness = Object.assign({}, truthiness);
Object.entries(truthiness).forEach(([key, val]) => {
  truthiness[key] = [...val];
});
console.log({truthiness});

// 14
arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
arr = arr.map(sub => sub.filter(num => num % 3 === 0));
console.log({arr});

// 15
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
arr.sort((a, b) => {
  return a.reduce((sum, num) => sum + (num % 2 === 0 ? 0 : num)) -
         b.reduce((sum, num) => sum + (num % 2 === 0 ? 0 : num));
});
console.log({arr});

// 16
obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

const result = Object.values(obj).map(obj => {
  if (obj.type === 'fruit') {
    return obj.colors.map(color => color[0].toUpperCase() + color.slice(1));
  } else {
    return obj.size.toUpperCase();
  }
});
console.log({result});

// 17
arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
arr = arr.filter(obj => Object.values(obj).flat().every(num => num % 2 === 0));
console.log({arr});

// 18
arr = [['a', 1], ['b', 'two'], ['sea', { c: 3 }], ['D', ['a', 'b', 'c']]];
obj = {};
arr.forEach(([key, val]) => {
  obj[key] = val;
});
console.log({obj});

obj = Object.fromEntries(arr);
console.log({obj});

// 19
munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

munsters = Object.assign({}, munsters);
Object.entries(munsters)
  .forEach(([key, val]) => {
    munsters[key] = Object.freeze(Object.assign({}, val));
  });
console.log({munsters});

munsters = JSON.parse(JSON.stringify(munsters),
  (_, munsterObj) => Object.freeze(munsterObj));

// 20
function randomSample(string) {
  return string[Math.floor(Math.random() * string.length)];
}

function generateUUID() {
  let result = [];
  for (let idx = 0; idx < 36; idx++) {
    if ([8, 13, 18, 23].includes(idx)) result.push('-');
    else result.push(randomSample('1234567890abcdef'));
  }

  return result.join('');
}

console.log(generateUUID());
console.log(generateUUID());
console.log(generateUUID());

// 21
// higher-order functions: scream and map
// callbacks: exclamate, and the lambda function used as an argument to map
