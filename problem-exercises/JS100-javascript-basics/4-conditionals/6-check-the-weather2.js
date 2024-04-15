const weatherArr = ['sunny', 'rainy', 'other'];
let randomIndex = Math.round(Math.random() * 2);
let weather = weatherArr[randomIndex];

switch (weather) {
  case 'sunny':
    console.log("It's a beautiful day!");
    break;
  case 'rainy':
    console.log("Grab your umbrella.");
    break;
  default:
    console.log("Let's stay inside.");
}
