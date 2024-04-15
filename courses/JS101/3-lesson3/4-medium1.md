# Medium 1 Practice Problems

## Question 1

```javascript
for (let count = 0; count < 10; count++) {
  console.log(' '.repeat(count) + 'The Flintstones Rock!');
}
```

## Question 2

```javascript
res = '';
for (char of string):
  if char.toLowerCase() === char: res += char.toUpperCase();
  else: res += char.toLowerCase();
return res;
```

## Question 3

replace the condition in the while loop with `divisor > 0`

## Question 4

You would prefer to use `push()` instead of `concat()` because push will mutate the original array, not create a copy and waste more memory. `concat()` would create a new copy every time, and the original buffer would remain unchanged.

## Question 5

logs `0.9`
logs `false` because of floating point imprecision

## Question 6

logs `false` because `NaN` does not equal itself.
Use `Number.isNaN()` to tell if a number is `NaN` or not.

## Question 7

logs `34` because the original number is not mutable, and the variable storing it was not re-assigned either.

## Question 8

Yes, because objects are pass-by-reference and the values method is returning the nested objects as each value of the parent object, and then the properties of those objects are being re-assigned.

## Question 9

returns `'paper'`

## Question 10

returns `'no'`
