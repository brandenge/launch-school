puts ">> Do you want me to print something? (y/n)"
puts "something" if gets.chomp.downcase == "y"

puts "Do you want me to print something? (y/n)"
input = gets.chomp
puts "something" if input =~ /y/i && input.length == 1

puts "Do you want me to print something? (y/n)"
input = gets.chomp
puts "something" if %w(y Y).include?(input)
