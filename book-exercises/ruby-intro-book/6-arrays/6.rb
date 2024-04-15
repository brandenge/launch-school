names = ['bob', 'joe', 'susan', 'margaret']

# names['margaret'] = 'jody'

=begin
The above line of code throws an error because you can't use a string inside
of bracket notation for an array. (You can however do this for a hash if the
hash key being referenced is a string.) So to fix this, you would have to use
the .index method to convert that string into its index number, like the
following line of code.
=end

names.index('margaret') = 'jody'

# Or just use the number index.

names[3] = 'jody'
