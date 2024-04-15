a = 7

def my_value(b)
  b = a + a
end

my_value(a)
puts a

=begin
Output:

NameError for undefined local variable 'a'

The local variable a being used inside of the method definition is scoped to inside of the method. Therefore, it is different than the top-level local variable a which is initialized to the integer 7. This means that the local variable a inside of the method definition is undefined because it is uninitialized, which will create the error, and the code will not finish executing past that line.
=end
