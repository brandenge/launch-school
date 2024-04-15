function dms(angle) {
  let degreesInt = Math.floor(angle) % 360;
  const degreeRemainder = angle % 1;
  const minutesFloat = degreeRemainder * 60;
  const minuteRemainder = minutesFloat % 1;
  let minutesInt = Math.floor(minutesFloat);
  let secondsInt = Math.round(minuteRemainder * 60);
  if (degreesInt < 0) degreesInt += 360;
  if (minutesInt < 0) minutesInt += 360;
  if (secondsInt < 0) secondsInt += 360;

  return `${degreesInt}°${String(minutesInt).padStart(2, '0')}'${String(secondsInt).padStart(2, '0')}"`;
}

console.log(dms(30));        // 30°00'00"
console.log(dms(76.73));     // 76°43'48"
console.log(dms(254.6));     // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
console.log(dms(0));         // 0°00'00"
console.log(dms(360));       // 360°00'00" or 0°00'00"

console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
