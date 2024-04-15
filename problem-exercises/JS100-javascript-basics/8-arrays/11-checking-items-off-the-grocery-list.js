let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

const checkOffItem = function(str) {
  console.log(String(groceryList.splice(groceryList.indexOf(str), 1)));
  console.log(groceryList);
}

console.log(groceryList);
checkOffItem('paprika');
checkOffItem('tofu');
checkOffItem('garlic');
checkOffItem('quinoa');
checkOffItem('carrots');
checkOffItem('broccoli');
checkOffItem('hummus');

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
