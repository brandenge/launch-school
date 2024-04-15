a = "Xyzzy"

def my_value(b)
  b[2] = '-'
end

my_value(a)
puts a

=begin
Output:

Xy-zy

Strings are not considered a primitive data type in Ruby (unlike Javascript), and therefore they are mutable. In this example, the [] is an operator / mutating method for string objects that does modify its string destructively.

So the difference here from the previous exercises is:

1) the top-level local variable being passed as an argument to the method is a string (which is mutable) instead of a number (which is immutable). This means that it is being passed by reference into the method (rather than passed by value, as it would for a number or any other immutable object). This further means that the top-level local variable a and the local variable b are both pointing to the same object (again, because it is pass by reference).

2) we are using a mutating/destructive method (the [] operator) inside of the method definition which mutates its receiver.

We can think of strings as behaving somewhat similarly as an array here. Each character in the string is like an element in an array, which we can change.
=end
