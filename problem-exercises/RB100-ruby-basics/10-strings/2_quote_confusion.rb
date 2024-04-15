puts "It's now 12 o'clock."

puts %Q(It's now 12 o'clock.)

puts %!It's now 12 o'clock.!

=begin
Further Exploration:

You can also use just about any symbol with percent strings, such as:

puts %!It's now 12 o'clock.!

In this example, ! is used in place of quotation marks to mark the start and end of the string. You could use just about any other symbol in its place as well, such as @, #, $, %, ^, &, *, etc. Also note that these symbols when used with percent strings are all equivalent to double quotes, not single quotes.

This is useful if you are using a lot of double quotes, single quotes, and perhaps even other symbols in the string and you want to avoid conflicts.
=end
