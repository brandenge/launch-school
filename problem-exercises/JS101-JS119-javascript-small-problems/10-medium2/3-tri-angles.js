const isValidTriangle = function(angles) {
  return angles.reduce((sum, angle) => sum + angle) === 180 && angles[0] > 0;
};

const triangle = function (...angles) {
  angles.sort((a, b) => a - b);
  if (!isValidTriangle(angles)) return 'invalid';
  else if (angles[2] === 90) return 'right';
  else if (angles[2] > 90) return 'obtuse';
  else return 'acute';
};

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
