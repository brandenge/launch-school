# Easy 1 Practice Problems

## Question 1

No error. When assigning an item to an index greater than the length of the array, it will increase the array accordingly and insert additional empty items/gaps in all the indices up to the given index. It takes more memory that isn't being used, but JavaScript does allow it.

Bonus: it returns undefined, because it is accessing an empty item/gap in the array, which always returns as undefined.

## Question 2

1. Look at the last index of the string and check if it is an exclamation mark.
2. Use the endsWith function

## Question 3

1. Look at `ages['Spot']`
2. Look at `ages.Spot`
3. `Object.keys(ages).includes('Spot')`
4. `ages.hasOwnProperty('Spot')`

## Question 4

`string[0].toUpperCase() + string.slice(1).toLowerCase()`

## Question 5

1. `true`
2. `false`

## Question 6

1. `Object.assign(ages, additionalAges);`

## Question 7

1. `str1.indexOf('Dino') !== -1;`
2. `str1.includes('Dino');`
3. `str1.match('Dino') !== null;`

## Question 8

1. `flintstones.push('Dino');`
2. `flintstones = flintstones.concat('Dino');`
3. `flintstones[flintstones.length] = 'Dino';`

## Question 9

1. `flintstones = flintstones.push('Dino', 'Happy');`
2. `flintstones = flintstones.concat('Dino', 'Happy');`

## Question 10

1. `advice.slice(0, advice.indexOf('house'));`
