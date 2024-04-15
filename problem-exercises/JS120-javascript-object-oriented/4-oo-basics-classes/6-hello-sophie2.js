class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}!`);
  }
}

// eslint-disable-next-line
const kitty = new Cat('Sophie');
kitty.greet();
