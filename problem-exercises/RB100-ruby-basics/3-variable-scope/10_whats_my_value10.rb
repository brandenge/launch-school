a = 7
array = [1, 2, 3]

def my_value(ary)
  ary.each do |b|
    a += b
  end
end

my_value(array)
puts a

=begin
Output:

NoMethodError

This will throw an error. It is a NoMethodError instead of a NameError for undefined local variable 'a' (because for some reason it first sees 'a' as nil instead of undefined, I am not sure why), but the reasons are effectively the same regardless.

Now because the block is being used inside of a method definition, it is going to have self-contained scope to inside that method call. So even though local variable 'a' is being used inside of a block that would normally be able to access outer scope, that block is still inside of a method call with the self-contained scope that cannot access variables from outer scope.

Because of this, when it gets to the statement/expression of a += b this can also be represented as a = a + b, where the right side of the assignment operator is evaluated first, and there the local variable 'a' will be uninitialized and therefore undefined upon the first iteration when that block is first executed (or perhaps because it sees 'a' on the left side first, it temporarily assigns it nil as it looks further ahead, hence the NoMethodError for nilClass, but I am not sure).
=end
