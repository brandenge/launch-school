function randomBetween(min, max) {
  if (min > max) [max, min] = [min, max];
  return parseInt((Math.random() * (max - min + 1)) + min, 10);
}

const age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);
