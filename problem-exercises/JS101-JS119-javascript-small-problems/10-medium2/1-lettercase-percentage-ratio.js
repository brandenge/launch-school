const charPercentageByRegex = function(string, regex) {
  const matchingChars = string.match(regex) || [];
  return (matchingChars.length / string.length * 100).toFixed(2);
};

const letterPercentages = function (string) {
  return {
    lowercase: charPercentageByRegex(string, /[a-z]/g),
    uppercase: charPercentageByRegex(string, /[A-Z]/g),
    neither: charPercentageByRegex(string, /[^a-z]/gi),
  };
};

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
