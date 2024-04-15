# Pseudocode Practice

## Problem 1

### Casual

```
declare a function called sum that takes 2 arguments that are numbers
  return the sum of the two numbers
```

### Formal

```
START

FUNC sum(num1 num2)
  RETURN num1 plus num2

END
```

## Problem 2

### Casual

```
declare a function called join that takes an array of strings
  return a string that is equal to all of the strings in the array concatenated together
```

### Formal

```
START

FUNC join(stringArray)
  RETURN stringArray elements joined together to create a string

END
```

## Problem 3

### Casual

```
declare a function call everyOther that takes an array of integers
  return a new array with only the elements at the even indices of array of integers that is passed in as an arguments
```

### Formal

```
START

FUNC everyOther(intArray)
  SET result = a new array equal to only the even indices from the argument array (filter out the odd indices)
  RETURN result

END
```

## Problem 4

### Casual

```
declare a function called thirdIndex that takes a string and a character as arguments
  split the string on the target character
  add the lengths of the first 2 arrays, and add 2 and return that value
```

### Formal

```
START

FUNC thirdIndex(string, char)
  SET splits = split the string on the character

  IF the length of splits is less than 4
    RETURN -1 for no 3rd occurence found

  SET result = length of the first string in splits, plus the length of the second string in splits, plus 2

  RETURN result
END
```

## Problem 5

### Casual

```
declare a function called merge that takes 2 arrays of equal length as arguments
  create a new array to store the result
  use an iterator index variable to iterate through both arrays at the same time
  for each index in the arrays:
    push the element from the first array
    push the element from the second array
  return the result array
```

### Formal

```
START

FUNC merge(arr1, arr2)
  SET result = []
  SET i = 0
  WHILE i < result.length
    result.push(arr1[i])
    result.push(arr2[i])
    i += 1
  RETURN result

END
```
