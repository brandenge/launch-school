class Truck {}

// eslint-disable-next-line
class Car {}

const towMixin = {
  tow() {
    return 'I can tow a trailer!';
  }
};

Object.assign(Truck.prototype, towMixin);

let truck = new Truck();
console.log(truck.tow());
