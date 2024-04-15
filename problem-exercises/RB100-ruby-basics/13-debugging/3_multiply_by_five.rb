=begin
We need to convert the input from a string to an integer to be able to perform math operations on it. All user input comes as a string by default, including numbers.

Below is the fix.
=end

def multiply_by_five(n)
  n * 5
end

puts "Hello! Which number would you like to multiply by 5?"
number = gets.chomp.to_i

puts "The result is #{multiply_by_five(number)}!"
