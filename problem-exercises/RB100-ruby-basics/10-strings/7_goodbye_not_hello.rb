greeting = 'Hello!'
puts greeting.replace('Goodbye!')

greeting = 'Hello!'
puts greeting.gsub!('Hello', 'Goodbye')

greeting = 'Hello!'
puts greeting.clear << "Goodbye!"
