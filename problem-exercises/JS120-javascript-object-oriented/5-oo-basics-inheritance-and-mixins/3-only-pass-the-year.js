class Vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends Vehicle {
  constructor(year, bedType) {
    super(year);
    this.bedType = bedType;
  }
}

// eslint-disable-next-line
class Car extends Vehicle {

}

let truck1 = new Truck(2003, 'Short');
console.log(truck1.year);
console.log(truck1.bedType);
