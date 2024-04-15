input_array = []
user_input = ''
while user_input != 'STOP' do
  puts 'Please enter an integer, or type STOP to stop.'
  user_input = gets.chomp
  if user_input.to_i.to_s == user_input
    input_array << user_input.to_i
  elsif user_input.to_i.to_s != user_input && user_input != 'STOP'
    puts 'You did not enter an integer or STOP.'
  end
end

print 'Here is an array of your inputted integers: '
print input_array
