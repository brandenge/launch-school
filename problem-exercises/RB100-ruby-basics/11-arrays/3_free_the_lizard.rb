pets = ['cat', 'dog', 'fish', 'lizard']
my_pets = pets[2..3]
my_pets = my_pets.shift
puts "I have a pet #{my_pets}"

my_pets = pets[2..3]
my_pets.pop
puts "I have a pet #{my_pets[0]}"

my_pets = pets[2..3]
my_pets.delete_at(-1)
puts "I have a pet #{my_pets[0]}"

my_pets = pets[2..3]
my_pets.delete_at(1)
puts "I have a pet #{my_pets[0]}"

my_pets = pets[2..3]
my_pets.delete('lizard')
puts "I have a pet #{my_pets[0]}"

my_pets = pets[2..3]
my_pets.delete_if {|pet| pet.start_with?('l')}
puts "I have a pet #{my_pets[0]}"
