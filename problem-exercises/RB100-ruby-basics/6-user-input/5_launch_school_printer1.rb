loop do
  puts ">> How many output lines do you want? Enter a number >= 3:"
  input = gets.to_i
  ((puts ">> That's not enough lines."); next;) if input < 3
  input.times {puts "Launch School is the best!"}
  break
end
