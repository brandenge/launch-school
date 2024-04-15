/*
Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
/* Below outputs an empty object because console.log doesn't output inherited properties. */
console.log(myObj);
console.log(myProtoObj);

/* Below shows that the inherited properties are actually still there, because a for/in loop will iterate through inherited properties. */
for (prop in myObj) {
  console.log(prop);
}
