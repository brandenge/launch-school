let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";

let words = tweet.split(' ');
let isValid = tweet.length < 140;

typeof tweet; // => 'string'
typeof words; // => 'object'
typeof isValid; // => 'boolean'
