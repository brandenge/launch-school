=begin
The code is returning nil upon each iteration that does not enter the conditional statement, which would be every time it encounters an odd number. The reason for this is that the block for the #map method will always return a value for every iteration, even if that value is nil.

To fix, we need to use a different method - use #select or #filter instead of #map. This will not return any value for any iteration the boolean expression inside of the block evaluates as false.
=end

numbers = [5, 2, 9, 6, 3, 1, 8]
even_numbers = numbers.select { |n| n.even? }
p even_numbers

numbers = [5, 2, 9, 6, 3, 1, 8]
even_numbers = numbers.filter { |n| n.even? }
p even_numbers
