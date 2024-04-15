const isUrl = function(text) {
  console.log(!!text.match(/^https?:\/\/\S+$/));
  return !!text.match(/^https?:\/\/\S+$/);
}

isUrl('http://launchschool.com');   // -> true
isUrl('https://example.com');       // -> true
isUrl('https://example.com hello'); // -> false
isUrl('   https://example.com');    // -> false
