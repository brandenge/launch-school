const buyFruit = (fruitQuantities) => {
  return fruitQuantities.flatMap(([fruit, quantity]) => {
    return Array.from({ length: quantity }, () => fruit);
  });
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
