const calculateBMI = function(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters ** 2;
  console.log(bmi.toFixed(2));
  return bmi.toFixed(2);
}

calculateBMI(180, 80); // "24.69"

/*
Another option that doesn't use the .toFixed method

const calculateBMI = function(heightInCentimeters, weightInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weightInKilograms / heightInMeters ** 2;
  bmi = Math.round(bmi * 100);
  bmi = bmi / 100;
  console.log(String(bmi));
  return String(bmi);
}
*/
