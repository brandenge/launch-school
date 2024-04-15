const input = require('readline-sync');
const noun = input.question('Enter a noun: ');
const verb = input.question('Enter a verb: ');
const adjective = input.question('Enter an adjective: ');
const adverb = input.question('Enter an adverb: ');

const sentences = [
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`,
  `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`,
  `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`
];

for (let sentence of sentences) {
  console.log(sentence);
}
