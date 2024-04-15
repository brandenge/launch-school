def meal
  return 'Breakfast'
  'Dinner'
  puts 'Dinner'
end

puts meal

=begin
Output:

Breakfast

Again, the explicit return statement on the first line of the function body will prevent any subsequent lines in the function body from being executed. So 'Breakfast' is returned from the function, and passed in as the argument into the puts method call outside of the function and outputted.
=end
