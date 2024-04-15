a = "hi there"
b = a
a = "not here"
# b => "hi there"
# Assignment operator does not mutate the caller, so a now points do a different
# memory address.

a = "hi there"
b = a
a << ", Bob"
# b => "hi there, Bob"
# The shovel/append operator does mutate the caller, so it changed the value in
# the same memory address.

a = [1, 2, 3, 3]
b = a
c = a.uniq
# a => [1, 2, 3, 3]
# b => [1, 2, 3, 3]
# c => [1, 2, 3]

# if the last line was c = a.uniq! then:
# a => [1, 2, 3]
# b => [1, 2, 3]
# c => [1, 2, 3]

def test(b)
  b.map { |letter| "I like the letter: #{letter}"}
end

a = ['a', 'b', 'c']
test(a)
# a => ['a', 'b', 'c']
# .map does not mutate the caller. Also the block did not use any methods would
# mutate the caller either.

# if it used .map! then:
# a => ["I like the letter: a", "I like the letter: b", "I like the letter: c"]
# in this case, .map! does mutate the caller, so it changes the value of the
# memory address for each element in a to the value returned by the block.
