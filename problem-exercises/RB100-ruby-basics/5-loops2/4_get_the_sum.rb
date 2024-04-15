loop do
  puts 'What does 2 + 2 equal?'
  answer = gets.chomp.to_i
  answer == 4 ? break : (puts "Wrong answer. Try again!")
end
puts "That's correct!"
