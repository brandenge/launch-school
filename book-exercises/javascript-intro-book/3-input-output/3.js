/*
Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

How old are you? 22
You are 22 years old.
In 10 years, you will be 32 years old.
In 20 years, you will be 42 years old.
In 30 years, you will be 52 years old.
In 40 years, you will be 62 years old.
*/

const age = function(age) {
  const years = [10, 20, 30, 40]
  const futureAges = years.map(year => year + age);
  console.log(`You are ${age} years old.`)
  for (i = 0; i <= years.length - 1; i++) {
    console.log(`In ${years[i]} years, you will be ${futureAges[i]} years old`);
  }
}

const getAge = function() {
  const rlSync = require('readline-sync');
  let age = parseInt(rlSync.question('How old are you?\n'));
  return age;
}

age(getAge());
