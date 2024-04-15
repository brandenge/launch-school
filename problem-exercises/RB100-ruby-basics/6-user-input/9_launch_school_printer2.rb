loop do
  puts ">> How many output lines do you want? Enter a number >= 3 (Q to quit):"
  input = gets.chomp
  break if %w(q Q).include?(input)
  ((puts ">> That's not enough lines."); next;) if input.to_i < 3
  input.to_i.times {puts "Launch School is the best!"} if input.to_i >= 3
end
