const catAge = function(humanYears) {
  let catYears = 0
  switch (humanYears) {
    case 0: catYears = 0; break;
    case 1: catYears = 15; break;
    case 2: catYears = 24; break;
    default: catYears = 24 + ((humanYears - 2) * 4);
  }
  console.log(catYears);
  return catYears;
}

catAge(0); // 0
catAge(1); // 15
catAge(2); // 24
catAge(3); // 28
catAge(4); // 32
