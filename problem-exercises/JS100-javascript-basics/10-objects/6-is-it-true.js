let obj = {
  num: 42,
  'property name': 'string value',
  true: false,
  fun: function() {
    console.log('Harr Harr!');
  },
};

for (let prop in obj) {
  if (prop === true) {
    console.log("It's true!");
  }
}

/*
Nothing is output because the property name obj.true is saved as the string 'true' not as the boolean value true. The conditional statement should be (prop === 'true') to get it to work properly.
*/
