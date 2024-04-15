loop do
  number = rand(100)
  number <= 10 ? ((puts number); break) : (puts number)
end

loop do
  number = rand(100)
  puts number
  break if number >= 0 && number <= 10
end

loop do
  number = rand(100)
  puts number
  break if number.between?(0, 10)
end

loop do
  number = rand(100)
  puts number
  break if (0..10).include? number
end
