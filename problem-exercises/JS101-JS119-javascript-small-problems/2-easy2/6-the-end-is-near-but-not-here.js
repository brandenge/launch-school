const penultimate = (words) => words.split(' ').at(-2);
const middleWord = (words) => {
  const wordsArr = words.split(' ');
  return wordsArr[parseInt(wordsArr.length / 2, 10)];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(middleWord("last word") === "last"); // logs true
console.log(middleWord("Launch School is great!") === "is"); // logs true
