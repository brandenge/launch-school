let weather = 'rainy';

if (weather === 'sunny') {
  console.log("It's a beautiful day!");
} else if (weather === 'rainy') {
  console.log("Grab your umbrella.");
} else {
  console.log("Let's stay inside.");
}

// Another version that doesn't hardcode the result by using Math.random().
const weatherObj = {
  sunny: "It's a beautiful day!",
  rainy: "Grab your umbrella.",
  other: "Let's stay inside.",
}

let randomIndex = Math.round(Math.random() * 2);

console.log(weatherObj[Object.keys(weatherObj)[randomIndex]]);
