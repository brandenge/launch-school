a = 7

def my_value(b)
  b += 10
end

my_value(a)
puts a

=begin
Output:

7

The returned value from the method call is not saved anywhere, and the method is not destructive. The argument a passed into the method will be re-assigned as its own local variable scoped to just inside the method. In order to modify the variable a destructively, you would have to re-assign a as the returned value from the method call.
=end
