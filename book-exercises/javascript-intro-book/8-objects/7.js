/*
Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
Without running this code, can you determine whether these two snippets produce the same output? Why?

The output will be different because myObj has inherited properties.
.forEach will only access the keys/properties that are directly part of the object and not inherited. The for/in loop will access all the properties of the object, including its inherited properties.
*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}
