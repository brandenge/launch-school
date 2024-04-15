def valid_number?(number_string)
  number_string.to_i.to_s == number_string
end

numerator = nil

loop do
  puts ">> Please enter the numerator:"
  numerator = gets.chomp
  break if valid_number?(numerator)
  puts ">> Invalid input. Only integers are allowed."
end

denominator = nil

loop do
  puts ">> Please enter the denomninator:"
  denominator = gets.chomp
  break if valid_number?(denominator)
  if denominator == "0"
    puts ">> Invalid input. A denominator of 0 is not allowed."
  end
  puts ">> Invalid input. Only integers are allowed."
end

result = numerator.to_i / denominator.to_i
puts "#{numerator} / #{denominator} is #{result}"
