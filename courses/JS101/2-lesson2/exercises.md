# Exercises

## Variable Scope Exercises

### Question 1

logs `10`

### Question 2

logs `5`
logs `10`

### Question 3

logs `5`

### Question 4

Error because `let` declarations get hoisted, and result in a `ReferenceError` if they are referenced before they are declared in the same scope.

### Question 5

logs `5`

### Question 6

logs `3`

### Question 7

infinite loop because the variable inside the loop is a new variable with the same name, and so that is what gets incremented. The variable referenced in the while conditional references the variable in the outer scope, not inside the loop.

## Objects vs Primitive Values Exercises

### Question 1

logs `'Hello'`

### Question 2

logs `'Hello'`
logs `'Hello'`
logs `'Hello'`

### Question 3

logs `['Hello', 'Goodbye']`

### Question 4

logs `['Hello']`

### Question 5

logs `['Hello']`

### Question 6

logs `['HELLO']`

## Variables as Pointers Exercises

### Question 1

logs `'Hello'`
logs `'Hello'`

### Question 2

logs `'Goodbye'`
logs `'Hello'`

### Question 3

logs `['Hi', 'Goodbye']`
logs `['Hi', 'Goodbye']`

### Question 4

logs `['Hi', 'Bye']`
logs `['Hello', 'Goodbye']`

### Question 5

logs `['Hi', 'Goodbye']`
logs `'Hello'`

### Question 6

logs `['Hi', 'Goodbye']`
logs `'Hello'`

## Pass by Reference vs Pass by Value Exercises

### Question 1

logs `'Hello'`
logs `'Hello'`

### Question 2

logs `'Hello'`
logs `'HELLO'`

### Question 3

logs `'Hello'`
logs `'Hello'`
logs `'HELLO'`

### Question 4

logs `['Hello', 'Goodbye']`
logs `['Hi', 'Goodbye']`

### Question 5

logs `['Hello', 'Goodbye']`
logs `['Hello', 'Goodbye']`

## Variables, Functions, and Blocks

### Question 1

logs `['red', 'green', 'blue', 'yellow']`

### Question 2

logs `['red', 'green', 'blue', 'undefined']`

### Question 3

logs `['red', 'green', 'blue', 'purple', 'pink']`

### Question 4

logs `['red', 'green', 'blue', 'purple', 'pink']`

### Question 5

logs `['red', 'green', 'blue']`

### Question 6

logs `'hello!!!'`
logs `'Hello'`
logs `'hello!!!'`

### Question 7

logs `'hello'`
logs `'Hello'`
logs `'Hello!!!'`
