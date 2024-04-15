stoplight = ['green', 'yellow', 'red'].sample

puts 'Go!' if stoplight == 'green'
puts 'Slow down!' if stoplight == 'yellow'
puts 'Stop!' if stoplight == 'red'

stoplight = ['green', 'yellow', 'red'].sample

if stoplight == 'green'
  puts 'Go!'
elsif stoplight == 'yellow'
  puts 'Slow down!'
else
  puts 'Stop!'
end
