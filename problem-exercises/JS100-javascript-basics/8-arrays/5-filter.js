let scores = [96, 47, 113, 89, 100, 102];
console.log(scores.filter(score => score >= 100).length);

console.log(scores.reduce(((acm, score) => (score >= 100 ? ++acm : acm)), 0));
