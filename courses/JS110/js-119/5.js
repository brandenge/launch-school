// Write a function that takes a string as an argument and
// returns the character that occurs least often in the
// given string. If there are multiple characters with the
// same lowest number of occurrences, then return the one
// that appears first in the string. When counting
// characters, consider uppercase and lowercase versions to
// be the same.

const charCounts = function(string) {
  const counts = {};

  for (const char of string) {
    counts[char.toLowerCase()] ||= 0;
    counts[char.toLowerCase()] += 1;
  }

  return counts;
};

const leastCommonChar = function(string) {
  const lowerCaseString = string.toLowerCase();
  const counts = charCounts(lowerCaseString);
  const minCount = Math.min(...Object.values(counts));

  const leastCommonChars = Object.keys(counts).filter(char => {
    return counts[char] === minCount;
  });

  return leastCommonChars[0];
};

// Examples:

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');

// The tests above should each log "true".
