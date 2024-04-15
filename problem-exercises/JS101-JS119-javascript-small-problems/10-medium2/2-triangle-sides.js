const triangle = function(...sideLengths) {
  const [shortest, middle, longest] = sideLengths.sort((a, b) => a - b);
  if (shortest <= 0 || shortest + middle <= longest) return 'invalid';
  else if (shortest === longest) return 'equilateral';
  else if (middle === shortest || middle === longest) return 'isosceles';
  else return 'scalene';
};

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
