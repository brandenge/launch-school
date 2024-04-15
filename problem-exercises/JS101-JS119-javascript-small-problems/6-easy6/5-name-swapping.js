const swapName = (name) => {
  return `${name.slice(name.lastIndexOf(' ') + 1)}, ${name.slice(0, name.lastIndexOf(' '))}`;
};

console.log(swapName('Joe Roberts'));
// "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));
// "Ragvals, Karl Oskar Henriksson"
