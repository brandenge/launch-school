# Hard 1 Practice Problems

## Question 1

No. The first function returns an object, meanwhile the second function always returns undefined, because the return statement ends with a semicolon.

## Question 2

logs `{ first: [1, 2] }`

## Question 3

A)
logs `one is: ["one"]`
logs `two is: ["two"]`
logs `three is: ["three"]`

B)
logs `one is: ["one"]`
logs `two is: ["two"]`
logs `three is: ["three"]`

C)
logs `one is: ["two"]`
logs `two is: ["three"]`
logs `three is: ["one"]`

## Question 4

Variables
1. boo
2. scare
3. myBoo
4. halloweenCollection
5. myBoo
6. console

Primitives
1. "!!!"
2. "HAPPY HALLOWEEN"
3. greet
4. scare
5. wish
6. "Happy Halloween"
7. "Boo"
8. "May all your pumpkins be glowing"
9. "greet"
10. "Boo"
11. "BOO!!!"
12. undefined
13. console
14. log

Objects
1. boo function
2. halloweenCollection object
3. log
4. console
5. toUpperCase

## Question 5

```javascript
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4): return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) return false;
  }

  return true;
}
```
