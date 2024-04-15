const TOKEN = {
  adjective: '%{adjective}',
  noun: '%{noun}',
  verb: '%{verb}',
  adverb: '%{adverb}',
};

// eslint-disable-next-line
Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

const madlibs = function(template) {
  const WORD_TYPES = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  for (const wordType in WORD_TYPES) {
    template =
      template.replaceAll(TOKEN[wordType], WORD_TYPES[wordType].sample());
  }

  return template;
};

const template1 = `The ${TOKEN.adjective} brown ${TOKEN.noun} ${TOKEN.adverb} ${TOKEN.verb} the ${TOKEN.adjective} yellow ${TOKEN.noun}, who ${TOKEN.adverb} ${TOKEN.verb} his ${TOKEN.noun} and looks around.`;

const template2 = `The ${TOKEN.noun} ${TOKEN.verb} the ${TOKEN.noun}'s ${TOKEN.noun}.`;

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2));      // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2));      // The "cat" "pats" the "cat"'s "head".
