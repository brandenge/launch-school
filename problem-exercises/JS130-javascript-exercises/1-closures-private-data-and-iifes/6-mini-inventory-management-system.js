const ItemCreator = (function() {
  function isValidItemName(itemName) {
    return typeof itemName === 'string' &&
           itemName.replaceAll(' ', '').length >= 5 &&
           /^[a-z ]+$/gi.test(itemName);
  }

  function isValidCategory(category) {
    return typeof category === 'string' &&
           category.length >= 5 &&
           /^[a-z]+$/gi.test(category);
  }

  function isValidQuantity(quantity) {
    return typeof quantity === 'number' && quantity >= 0;
  }

  function isValidItem(itemName, category, quantity) {
    return isValidItemName(itemName) &&
           isValidCategory(category) &&
           isValidQuantity(quantity);
  }

  function generateSku(itemName, category) {
    return itemName.replace(' ', '').slice(0, 3).toUpperCase() +
           category.slice(0, 2).toUpperCase();
  }

  return (function(itemName, category, quantity) {
    if (!isValidItem(itemName, category, quantity)) {
      return { notValid: true };
    }
    this.skuCode = generateSku(itemName, category);
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    return this;
  });
})();

const ItemManager = {
  items: [],

  // eslint-disable-next-line
  getItem(skuCode) {
    for (const item of this.items) {
      if (item.skuCode === skuCode) return item;
    }
  },

  create(itemName, category, quantity) {
    const newItem = new ItemCreator(itemName, category, quantity);
    if (newItem.notValid) return false;
    this.items.push(newItem);
    return newItem;
  },

  update(skuCode, updatedInformation) {
    return Object.assign(this.getItem(skuCode), updatedInformation);
  },

  delete(skuCode) {
    const itemIndex = this.items.findIndex(item => item.skuCode === skuCode);
    this.items.splice(itemIndex, 1);
  },

  inStock() {
    return this.items.filter(item => item.quantity > 0);
  },

  itemsInCategory(category) {
    return this.items.filter(item => item.category === category);
  }
};

const ReportManager = {
  init(itemManager) {
    this.items = itemManager;
  },

  createReporter(skuCode) {
    const item = this.items.getItem(skuCode);

    return {
      itemInfo() {
        console.log('');
        for (const [key, value] of Object.entries(item)) {
          console.log(`${key}: ${value}`);
        }
        console.log('');
      }
    };
  },

  reportInStock() {
    console.log(this.items.inStock().map(item => item.itemName).join(','));
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
console.log(ItemManager.items);

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
console.log(ItemManager.inStock());
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items
// (soccer ball is removed from the list)
console.log(ItemManager.items);

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
