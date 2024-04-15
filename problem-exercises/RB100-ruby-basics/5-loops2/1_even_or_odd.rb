count = 1

loop do
  puts "#{count} is #{count.odd? ? "odd" : "even"}!"
  break if count == 5
  count += 1
end
