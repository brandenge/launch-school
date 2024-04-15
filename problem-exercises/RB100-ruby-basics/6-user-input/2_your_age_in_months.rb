puts ">> What is your age in years?"
input = gets.chomp.to_i
puts "you are #{input * 12} months old."

=begin
Further Exploration: What happens if you enter a non-numeric value for the age?

to_i will return 0 if the object cannot be converted to an integer, such as letters in a string.
=end
