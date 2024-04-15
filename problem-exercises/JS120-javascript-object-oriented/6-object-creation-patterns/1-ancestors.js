// eslint-disable-next-line
Object.prototype.ancestors = function () {
  const prototypeChain = [];
  let proto = Object.getPrototypeOf(this);

  while (proto) {
    prototypeChain.push(proto.name || 'Object.prototype');
    proto = Object.getPrototypeOf(proto);
  }

  return prototypeChain;
};

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
