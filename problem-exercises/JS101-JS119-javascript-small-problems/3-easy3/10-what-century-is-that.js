function century(year) {
  const century = Math.ceil(year / 100).toString();
  switch (true) {
    case century.at(-2) === '1': return `${century}th`;
    case century.endsWith('1'): return `${century}st`;
    case century.endsWith('2'): return `${century}nd`;
    case century.endsWith('3'): return `${century}rd`;
    default: return `${century}th`;
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
