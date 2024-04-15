def meal
  puts 'Dinner'
  return 'Breakfast'
end

puts meal

=begin
Output:

Dinner
Breakfast

The puts for 'Dinner' does not return and exit from the function, it is just a command for ouput. Then 'Breakfast' is returned from the function, and passed into the 2nd call for puts outside of the function, to output 'Breakfast'.
=end
