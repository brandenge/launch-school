class Triangle {
  #sides;

  constructor(...sides) {
    this.#sides = sides;
    if (!this.isValid()) throw new Error('Invalid triangle lengths');
  }

  isValid() {
    const [side1, side2, side3] = this.#sides;
    let isValid = true;
    if ([side1, side2, side3].some(side => side <= 0)) isValid = false;
    if (side1 >= side2 + side3) isValid = false;
    if (side2 >= side1 + side3) isValid = false;
    if (side3 >= side1 + side2) isValid = false;
    return isValid;
  }

  isEquilateral() {
    const [side1, side2, side3] = this.#sides;
    return side1 === side2 && side2 === side3;
  }

  isIsosceles() {
    const [side1, side2, side3] = this.#sides;
    return !this.isEquilateral() &&
           (side1 === side2 || side1 === side3 || side2 === side3);
  }

  kind() {
    if (this.isEquilateral()) return 'equilateral';
    else if (this.isIsosceles()) return 'isosceles';
    else return 'scalene';
  }
}

module.exports = Triangle;
