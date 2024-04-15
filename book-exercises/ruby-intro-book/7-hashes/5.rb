hash1 = { a: 1, b: 2, c: 3, d: 4, e: 5 }

def hash_has_value(hash, value)
  if hash.value?(value)
    puts "The hash has the value: #{value}."
  else
    puts "The hash does not have the value: #{value}."
  end
end

puts hash1.value?(2)
puts hash1.value?("2")
puts hash1.value?(6)

hash_has_value(hash1, 2)
hash_has_value(hash1, 6)

# Test using a constant instead of a global variable so it doesn't need to be
# passed as an argument. This also works.

HASH1 = { a: 1, b: 2, c: 3, d: 4, e: 5 }

def hash_has_value(value)
  if HASH1.value?(value)
    puts "The hash has the value: #{value}."
  else
    puts "The hash does not have the value: #{value}."
  end
end

puts HASH1.value?(2)
puts HASH1.value?("2")
puts HASH1.value?(6)

hash_has_value(2)
hash_has_value(6)
