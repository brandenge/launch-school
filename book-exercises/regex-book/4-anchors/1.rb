=begin
/^The\b/

/\AThe\b/ doesn't work because Rubular treats multiple test strings on multiple lines as a single multiline string, so the start of each line will be considered the start of a new line, but not the start of a new string.
=end
