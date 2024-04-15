x = "hi there"
my_hash = { x: "some value" }
my_hash2 = { x => "some value" }

# The difference between these 2 hashes is that the first one is using a symbol
# as its key, and the 2nd one is using a string as its key. There is also a
# difference in syntax. The first one uses the newer syntax that only works for
# symbols as hash keys and the 2nd one uses the older hashrocket syntax, which
# works with using any object as a hash key, not just symbols.
