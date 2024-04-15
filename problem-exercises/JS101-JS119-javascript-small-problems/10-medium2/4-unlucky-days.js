const fridayThe13ths = function(year) {
  const FRIDAY = 5;
  let fridayThe13thCount = 0;
  let thirteenthDate = new Date(year, 0, 13);
  for (let month = 0; month < 12; month++) {
    thirteenthDate.setMonth(month);
    if (thirteenthDate.getDay() === FRIDAY) fridayThe13thCount += 1;
  }
  return fridayThe13thCount;
};

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
