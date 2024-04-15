class Pet {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }
}

class Cat extends Pet {
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
