a = 7
array = [1, 2, 3]

array.each do |element|
  a = element
end

puts a

=begin
Output:

3

Arrays are mutable, and also we are using a block to access the local variable a, instead of a method. Blocks use closures so their scope is not self-contained like a method call is. Therefore, the block is able to access the top-level local variable 'a' in the outer scope (outer scope still cannot access local variables initialized in the inner scope of the block, which does not apply in this situation).

Note that 'a' gets re-assigned to every element in the array. 3 is the final element in the array, and so that is the final assignment, which then gets printed.
=end
