const swapLetterCase = (letter) => {
  return /[a-z]/.test(letter) ? letter.toUpperCase() : letter.toLowerCase();
};

const swapCase = (string) => string.replace(/[a-z]/gi, swapLetterCase);

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
