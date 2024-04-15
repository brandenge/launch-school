const repeat = function(numTimes, str) {
  accStr = '';
  for (numTimes; numTimes > 0; numTimes -= 1) {
    accStr += str;
  }
  return accStr;
}

console.log(repeat(3, 'ha')); // 'hahaha'
