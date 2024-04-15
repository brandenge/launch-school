function getGrade(...scores) {
  const mean = scores.reduce((sum, num) => sum + num) / scores.length;
  switch (true) {
    case mean >= 90: return 'A';
    case mean >= 80: return 'B';
    case mean >= 70: return 'C';
    case mean >= 60: return 'D';
    default: return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
