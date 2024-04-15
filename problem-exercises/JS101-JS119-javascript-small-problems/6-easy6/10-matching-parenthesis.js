const isBalanced = (string) => {
  const stack = [];
  const matches = { ')': '(', ']': '[', '}': '{' , '"': '"', "'": "'" };
  let quoteIsOpen = false;

  for (const char of [...string]) {
    if (')]}'.includes(char) || ('"\''.includes(char) && quoteIsOpen)) {
      if (stack.length === 0) return false;
      const popped = stack.pop();
      if (popped !== matches[char]) return false;
    }

    if ('([{'.includes(char) || ('"\''.includes(char) && !quoteIsOpen)) {
      stack.push(char);
    }
    if ('"\''.includes(char)) quoteIsOpen = !quoteIsOpen;
  }
  return stack.length === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

console.log(isBalanced("Wh[a][t (is)] this?") === true);
console.log(isBalanced("What (is) {{th}is?") === false);
console.log(isBalanced("What (is t'h'i}s?") === false);
console.log(isBalanced("((What) '(i{s} t[hi]s)')?") === true);
console.log(isBalanced("((What)) (i[s]] this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced("H[e}y!(") === false);
console.log(isBalanced("Wha[t ((is))) up") === false);
console.log(isBalanced("He'y\"!") === false);
console.log(isBalanced("H(e{y)!}") === false);
