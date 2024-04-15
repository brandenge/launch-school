loop do
  puts 'Should I stop looping?'
  answer = gets.chomp
  break if answer.downcase == 'yes'
  puts "You entered #{answer}. Enter 'yes' to exit."
end
