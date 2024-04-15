const greetings = {
  en: 'Hi!',
  fr: 'Salut!',
  pt: 'Olá!',
  de: 'Hallo!',
  sv: 'Hej!',
  af: 'Haai!',
}

const greet = function(langCode) {
  console.log(greetings[langCode]);
  return greetings[langCode];
}

greet('en'); // 'Hi!'
greet('fr'); // 'Salut!'
greet('pt'); // 'Olá!'
greet('de'); // 'Hallo!'
greet('sv'); // 'Hej!'
greet('af'); // 'Haai!'

const greet2 = function(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

console.log(greet2('en')); // 'Hi!'
console.log(greet2('fr')); // 'Salut!'
console.log(greet2('pt')); // 'Olá!'
console.log(greet2('de')); // 'Hallo!'
console.log(greet2('sv')); // 'Hej!'
console.log(greet2('af')); // 'Haai!'
