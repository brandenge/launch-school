function shortLongShort(string1, string2) {
  const [shorter, longer] =
    [string1, string2].sort((a, b) => a.length - b.length);
  return shorter + longer + shorter;
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));
