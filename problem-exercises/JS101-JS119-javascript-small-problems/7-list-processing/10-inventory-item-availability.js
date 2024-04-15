const transactionsFor = (itemId, transactions) => {
  return transactions.filter((transaction) => transaction.id === itemId);
};

const isItemAvailable = (itemId, transactions) => {
  const itemTransactions = transactionsFor(itemId, transactions);
  const itemQuantity = itemTransactions.reduce((sum, transaction) => {
    if (transaction.movement === 'in') return sum + transaction.quantity;
    else return sum - transaction.quantity;
  }, 0);
  return itemQuantity > 0;
};

let transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
