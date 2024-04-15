/*
Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.
*/

const futureAges = function() {
  const age = getAge();
  console.log(`You are ${age} years old.`)
  for (let future = 10; future <= 40; future += 10) {
    console.log(`In ${future} years, you will be ${age + future} years old`);
  }
}

const getAge = function() {
  const rlSync = require('readline-sync');
  const age = parseInt(rlSync.question('How old are you?\n'));
  return age;
}

futureAges();
