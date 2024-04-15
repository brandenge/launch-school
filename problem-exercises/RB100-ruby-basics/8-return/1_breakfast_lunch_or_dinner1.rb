def meal
  return 'Breakfast'
end

puts meal

=begin
Output:

Breakfast

The reason is that puts is a method that is passing another method call as its argument. This will cause puts to output the return value of that method called as its argument. This is an example of function composition.
=end
