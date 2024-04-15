colors = 'blue pink yellow orange'
puts colors.include?('yellow')
puts colors.include?('purple')

colors = 'blue pink yellow orange'
p /yellow/.match?(colors)
p /purple/.match?(colors)

# Further Exploration
colors = 'blue boredom yellow'
puts colors.include?('red')

=begin
Further exploration:

The output then is true because the substring 'red' exists inside of the word 'boredom'.
=end
