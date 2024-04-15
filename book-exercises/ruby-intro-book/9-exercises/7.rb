=begin
The major difference between an array and a hash is that a hash is an associative array, meaning that values are associated with keys, forming key:value pairs which are used to referencing elements in the hash. In contrast, arrays use indexes instead of keys to reference their elements.

Hashes in Ruby v1.9 or newer are also ordered based on when its key:value pairs were inserted into the hash, whereas arrays are ordered based on their index.

In Ruby versions older than v1.9, hashes are unordered.
=end

hash = { dog: 'fido', cat: 'fluffy' }

array = ['fido', 'fluffy']

puts hash[:dog]
puts array[0]

puts hash[:cat]
puts array[1]
