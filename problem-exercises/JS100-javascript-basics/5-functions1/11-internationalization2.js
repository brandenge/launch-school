const localGreet = function (locale) {
  lang = extractLanguage(locale);
  region = extractRegion(locale);
  if (lang === 'en') {
    switch (region) {
      case 'US': console.log('Hey!'); return 'Hey!';
      case 'GB': console.log('Hello!'); return 'Hello!';
      case 'AU': console.log('Howdy!'); return 'Howdy!';
      case 'CA': console.log('Hi!'); return 'Hi!';
    }
  }
  console.log(greet(lang));
  return greet(lang);
}

const extractLanguage = function(locale) {
  return locale.split('_')[0];
}

const extractRegion = function(locale) {
  return locale.split('.')[0]
               .split('_')[1];
}

const greet = function(langCode) {
  switch (langCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('en_CA.UTF-8'); // 'Hi!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
