/*
Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

Consider this code:

> let x = "5"
> x = x + 1
= "51"

Now, consider this code:

> let y = "5"
> y++
What gets returned by y++ in the second snippet, and why?

It returns 5 because it is using the post-increment operator, which returns the original value of the variable before the increment takes place. However, the post-increment operator still performs the implicit type coercion before doing the return value, which is why it returns a number and not a string (5 and not "5").
*/
