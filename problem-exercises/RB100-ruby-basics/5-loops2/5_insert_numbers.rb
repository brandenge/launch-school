numbers = []

loop do
  puts 'Enter any number:'
  numbers << input = gets.chomp.to_i
  break if numbers.count == 5
end
puts numbers
