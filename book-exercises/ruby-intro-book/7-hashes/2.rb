hash1 = { a: 1, b: 2, c: 3 }
hash2 = { d: 4, e: 5, f: 6 }

hash1.merge(hash2)

p "hash1 after .merge is unchanged:"
p hash1

p "hash2 after .merge is also unchanged:"
p hash2

merged_hash = hash1.merge(hash2)

p "Save the results of .merge to a new merged hash variable."
p "merged_hash is now:"
p merged_hash
# => { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

hash1.merge!(hash2)

p "hash1 after .merge! is changed:"
p hash1
# => { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
# Note that the differene here between .merge and .merge! methods is that .merge! is destructive and mutates the caller. .merge does not.

p "hash2 after .merge! is unchanged:"
p hash2
# => { d: 4, e: 5, f: 6 }
