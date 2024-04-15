const repeater = (string) => {
  return [...string].reduce((acc, char) => acc + char + char, '');
};

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
