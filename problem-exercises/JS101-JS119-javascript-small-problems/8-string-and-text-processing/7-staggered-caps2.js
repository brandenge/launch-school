const staggeredCase = (string, countNonAlphabetic = false) => {
  if (!countNonAlphabetic) {
    return [...string].map((char, idx) => {
      return idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');
  }

  let upperCaseToggle = false;
  return [...string].map(char => {
    if (/[a-z]/i.test(char)) {
      upperCaseToggle = !upperCaseToggle;
      return upperCaseToggle ? char.toUpperCase() : char.toLowerCase();
    }
    return char;
  }).join('');
};

console.log(staggeredCase("I Love Launch School!", true) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS", true) === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers", true) === "IgNoRe 77 ThE 444 nUmBeRs"
);
