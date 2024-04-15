const getCounts = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el] ||= 0;
    acc[el] += 1;
    return acc;
  }, {});
};

const logCounts = (counts) => {
  for (const [el, count] of Object.entries(counts)) {
    console.log(`${el} => ${count}`);
  }
};

const countOccurrences = (arr) => {
  const counts = getCounts(arr);
  logCounts(counts);
};

let vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'suv', 'motorcycle', 'car', 'truck'
];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
