def find_first_nonzero_among(numbers)
  numbers.each do |n|
    return n if n.nonzero?
  end
end

find_first_nonzero_among(0, 0, 1, 0, 2, 0)
find_first_nonzero_among(1)

=begin
NoMethodError - You are trying to use #each in the method body, which is an instance method for the Array or Enumerable classes, but provide only integers as arguments in the method call. The Integer or Numeric classes do not have an instance method called #each, hence the NoMethodError.

Also ArgumentError - The method is expecting 1 argument, but the first method call provides 6 arguments.

The fix:

find_first_nonzero_among([0, 0, 1, 0, 2, 0])
find_first_nonzero_among([1])
=end
