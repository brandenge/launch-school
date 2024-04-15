function countMaxAdjacentConsonants(string) {
  let maxCount = 0;
  let currentCount = 0;
  for (const char of string) {
    if (/[b-df-hj-np-tv-z]/i.test(char)) {
      currentCount += 1;
      if (currentCount > maxCount) maxCount = currentCount;
    } else if ((/[aeiou]/i.test(char))) {
      currentCount = 0;
    }
  }
  maxCount -= 1;
  if (maxCount < 0) maxCount = 0;
  return maxCount;
}

console.log(countMaxAdjacentConsonants('dddaa')); // 2
console.log(countMaxAdjacentConsonants('ccaa'));  // 1
console.log(countMaxAdjacentConsonants('baa'));   // 0
console.log(countMaxAdjacentConsonants('aa'));    // 0
console.log(countMaxAdjacentConsonants('month')); // 2

function compareMaxAdjacentConsonants(stringA, stringB) {
  return countMaxAdjacentConsonants(stringB) -
    countMaxAdjacentConsonants(stringA);
}

function sortStringsByConsonants(strings) {
  return strings.toSorted(compareMaxAdjacentConsonants);
}

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
