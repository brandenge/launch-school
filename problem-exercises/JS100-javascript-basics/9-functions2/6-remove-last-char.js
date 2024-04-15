const removeLastChar = function(str) {
  str = str.slice(0, str.length - 1);
  console.log(str);
  return str;
}

removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

/*
Another option:

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}
*/
