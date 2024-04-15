/*
Write a program named age.js that includes someone's age and then calculates and reports the future age in 10, 20, 30 and 40 years. Below is the output for someone 20 years old.

You are 20 years old.
In 10 years, you will be 30 years old.
In 20 years, you will be 40 years old.
In 30 years, you will be 50 years old.
In 40 years, you will be 60 years old.
*/

const age = function(age) {
  const years = [10, 20, 30, 40]
  const futureAges = years.map(year => year + age);
  console.log(`You are ${age} years old.`)
  for (i = 0; i <= years.length - 1; i++) {
    console.log(`In ${years[i]} years, you will be ${futureAges[i]} years old`);
  }
}

age(20);
age(36);
