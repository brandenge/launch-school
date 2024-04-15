const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;

// // Without Date Object
// const afterMidnight = (timeString) => {
//   const [hours, minutes] = timeString.split(':').map(num => +num);
//   return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
// };

// const beforeMidnight = (timeString) => {
//   return (MINUTES_PER_DAY - afterMidnight(timeString)) % MINUTES_PER_DAY;
// };


// With Date Object
const afterMidnight = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(num => +num);
  const baseDateObj = new Date(2024, 0, 1, 0, 0);
  const dateObj = new Date(2024, 0, 1, hours, minutes);
  return Math.round((dateObj - baseDateObj) /
    MILLISECONDS_PER_SECOND / SECONDS_PER_MINUTE) % MINUTES_PER_DAY;
};

const beforeMidnight = (timeString) => {
  return (MINUTES_PER_DAY - afterMidnight(timeString)) % MINUTES_PER_DAY;
};

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
