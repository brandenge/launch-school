a = 7

def my_value(a)
  a += 10
end

my_value(a)
puts a

=begin
Output:

7

This is the exact same thing as part 1. Just because the parameter name in this case has the same name as the argument being passed to it, does not change anything except that the name for variable is now being shadowed when it is being used inside of the method definition. However, the argument a being passed in as the method call is still being re-assigned to another local variable a scoped to just inside of the method definition. Local variables outside of the method definition are never visible inside of a method definition, unless they have global scope, such as global variables or constants. Also, local variables inside of the method definition are also not visible outside of it.
=end
