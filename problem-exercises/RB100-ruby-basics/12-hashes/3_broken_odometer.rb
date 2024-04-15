car = {
  type:    'sedan',
  color:   'blue',
  mileage: 80_000,
  year:    2003
}

car.delete(:mileage)

car.delete_if { |k,v| k.to_s.include? 'mile' }

puts car

=begin
Note that the above requires to_s to work to convert the symbol to a string because #include? is an instance method for the String class, but not the Symbol class.

car.delete_if { |k,v| k.start_with? 'mile' }

Note that the above deos not require to_s to work because #start_with? is an instance method for the Symbol class.
=end
