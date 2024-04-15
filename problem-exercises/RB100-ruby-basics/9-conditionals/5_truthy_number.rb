number = 7

if number
  puts "My favorite number is #{number}."
else
  puts "I don't have a favorite number."
end

=begin
Output:

My favorite number is 7.

The variable 'number' is evaluated in a boolean context, which means it will be evaluated as a truthy or falsy value. This implicitly type coerces it into a boolean value, which in this case is true because it isn't one of the falsy values in Ruby (false or nil).
=end
