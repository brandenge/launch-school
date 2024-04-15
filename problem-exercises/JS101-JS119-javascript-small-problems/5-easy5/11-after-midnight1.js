// // Without Date Object

// const HOURS_PER_DAY = 24;
// const MINUTES_PER_HOUR = 60;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// const minutesToHoursAndMinutes = (minutesDelta) => {
//   minutesDelta %= MINUTES_PER_DAY;
//   if (minutesDelta < 0) minutesDelta += MINUTES_PER_DAY;

//   let hours = Math.floor(minutesDelta / MINUTES_PER_HOUR);
//   let minutes = Math.round(minutesDelta % MINUTES_PER_HOUR);

//   return { hours, minutes };
// };

// const formatTime = (hours, minutes) => {
//   hours = String(hours).padStart(2, '0');
//   minutes = String(minutes).padStart(2, '0');

//   return `${hours}:${minutes}`;
// };

// const timeOfDay = (minutes) => {
//   const hoursAndMinutes = minutesToHoursAndMinutes(minutes);
//   return formatTime(...Object.values(hoursAndMinutes));
// };

// With Date Object
const timeOfDay = (minutes) => {
  const dateObj = new Date(2024, 0, 14, 0, minutes);
  return dateObj.toLocaleDateString('en-gb',
    { weekday: 'long', hour12: false, hour: '2-digit', minute: '2-digit' });
};

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));
