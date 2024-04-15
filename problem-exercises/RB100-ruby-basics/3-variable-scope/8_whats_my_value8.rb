array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a

=begin
Output:

NameError for undefined local variable 'a'

The local variable 'a' that is initialized in the inner scope of the block is not accessible in outer scope. So the local variable 'a' being used in the outer scope is uninitialized and undefined.
=end
