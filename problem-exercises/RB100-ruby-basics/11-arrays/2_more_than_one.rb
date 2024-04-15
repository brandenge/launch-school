pets = ['cat', 'dog', 'fish', 'lizard']

my_pets = pets.select { |element| element.size > 3 }
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"

my_pets = pets[2..3]
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"

my_pets = pets[2, 3]
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"

my_pets = pets.select {|pet| pet.start_with?('f', 'l')}
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"

my_pets = pets.select {|pet| pet == 'fish' || pet == 'lizard'}
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"

my_pets = pets.select {|pet| pet.include?('fish') || pet.include?('lizard')}
puts "I have a pet #{my_pets[0]} and a pet #{my_pets[1]}!"
