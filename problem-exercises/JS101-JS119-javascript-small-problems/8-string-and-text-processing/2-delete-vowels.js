const removeVowels = (strings) => {
  return strings.map(string => string.replace(/[aeiou]/gi, ''));
};

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
// ["BC", "", "XYZ"]
