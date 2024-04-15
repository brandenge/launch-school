const caseInsensitiveEquality = function(str1, str2) {
  result = str1.toLowerCase() == str2.toLowerCase();
  console.log(result);
  return result;
}

let str1 = 'Polar Bear';
let str2 = 'Polar bear';
let str3 = 'Penguin';

caseInsensitiveEquality(str1, str2);
caseInsensitiveEquality(str1, str3);
caseInsensitiveEquality(str2, str3);
