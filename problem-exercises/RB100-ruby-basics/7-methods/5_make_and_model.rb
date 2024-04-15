def car(make, model)
  puts "#{make} #{model}"
end

car('Toyota', 'Corolla')

# Modification for Further Exploration
def car(make, model)
  "#{make} #{model}"
end

puts car('Toyota', 'Corolla')

=begin
Further Exploration:

Without #puts as the last statement inside of the method, the method will return the string. With #puts as the last statement inside of the method, the method will return nil because #puts returns nil.
=end
