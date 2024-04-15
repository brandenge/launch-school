def scream(words)
  words = words + "!!!!"
  puts words
end

scream("Yippeee")
# Explicit return removed so now <puts words> on line 3 is executed.
# Output is: Yippeee!!!!
# Return value is still nil.
