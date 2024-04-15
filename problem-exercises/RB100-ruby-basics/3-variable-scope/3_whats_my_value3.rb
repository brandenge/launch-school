a = 7

def my_value(b)
  a = b
end

my_value(a + 5)
puts a

=begin
Output:

7

This is still the same as the previous exercises. The local variable initialized inside of the method definition is different than the local variable initialized outside of it. The method scope is self-contained so it cannot destructively alter the local variable a initialized outside of the method definition. In order to alter the value of a, you would need to re-assign a to the returned value from the method call. This would effectively pass the result from the scope inside the method to the scope outside of the method.

Unless the returned value from the method call is saved to a variable, it will be lost the moment that method call has finished. The only way to have side-effects be passed from inside of a method call to outside the method call (i.e. to modify an object destructively) is to either:

1) save the returned value from the method by assigning it to a variable
2) modify a variable with global scope such as a global variable or constant (even though you are not supposed to modify constants, Ruby will allow it but throw an error).
3) call a method that will modify its receiver destructively (these methods only exist for mutable objects though, like strings or arrays - not a primitive data types like numbers).

(Note that in Ruby, strings are not considered a primitive datatype, meaning they are mutable. This is different from Javascript.)
=end
