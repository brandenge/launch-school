function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome("356653"));

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
