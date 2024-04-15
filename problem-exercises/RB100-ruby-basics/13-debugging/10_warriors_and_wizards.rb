=begin
You have to convert the input from a string to a symbol to be able to reference it using bracket notation. Otherwise the string key will not match the keys in the hash, which are symbols, and thus it will return nil since it is a key that does not currently exist, and all hash keys that don't exist return nil by default. When it returns nil, it feeds nil as the argument into the #merge method, which is expecting a hash, hence the TypeError of no implicit conversion of nil into hash.

You also need to use #merge! instead of #merge, or save the results of #merge because otherwise it is returning a modified version of player, and so those modifications will not be output from the last line using #puts.
=end

player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

character_classes = {
  warrior: { strength:  20 },
  thief:   { dexterity: 20 },
  scout:   { stamina:   20 },
  mage:    { charisma:  20 }
}

puts 'Please type your class (warrior, thief, scout, mage):'
input = gets.chomp.downcase

player.merge!(character_classes[input.to_sym])

puts 'Your character stats:'
puts player

# Example of #merge! with a block:

player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

character_classes = {
  warrior: { strength:  20 },
  thief:   { dexterity: 20 },
  scout:   { stamina:   20 },
  mage:    { charisma:  20 }
}

puts 'Please type your class (warrior, thief, scout, mage):'
input = gets.chomp.downcase

player.merge!(character_classes[input.to_sym]) do |key, old_value, new_value|
  old_value + new_value
end

puts 'Your character stats:'
puts player
