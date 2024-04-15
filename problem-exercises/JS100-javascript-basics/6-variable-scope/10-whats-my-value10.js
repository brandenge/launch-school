const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a); // logs => { firstName: 'Jane', lastName: 'Doe' }

/*
Although the object is assigned to a constant variable, its properties can still be reassigned. So the reassignment still works correctly, and will not throw an error.
*/
