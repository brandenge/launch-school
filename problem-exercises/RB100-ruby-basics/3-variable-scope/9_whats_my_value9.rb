a = 7
array = [1, 2, 3]

array.each do |a|
  a += 1
end

puts a

=begin
Output:

7

The local variable 'a' in the top-level scope is different than the local variable 'a' being used to represent each element in the block that will be executed for each iteration for the .each method. Therefore, the local variable 'a' inside of the block is not accessible outside of the block, because it was initialized inside of the block. So the puts statement will puts the local variable 'a' from the outer scope since that is the only variable with that name that is accessible from that outer scope.

In this context, the local variable 'a' in the inner scope inside of the block is said to be shadowing the local variable 'a' in the top-level outer scope, as if it is hiding in the shadow of the local variable 'a' in the top-level outer scope. The local variable 'a' in the top-level outer scope is said to be shadowed.
=end
