a = "Xyzzy"

def my_value(b)
  b = 'yzzyX'
end

my_value(a)
puts a

=begin
Output:

Xyzzy

There is not mutating/destructive method/operator being used here. The assignment operator is not destructive. So even though strings are pass by reference and mutable, without any mutating/destructive method/operator, it will simply create a new object with the modifications and then point to (and/or return) that new object. In this case, the assignment operator simply creates the new object and changes what the local variable b is pointing to so that it points to the new object it just created. Therefore, the object that the top-level local variable a is pointing to remains unchanged.
=end
