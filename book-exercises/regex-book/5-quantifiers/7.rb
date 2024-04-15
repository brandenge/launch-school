=begin
/\b[a-z]*i[a-z]*i[a-z]*i[a-z]*\b/i

or

/\b([a-z]*i){3}[a-z]*\b/i

or

/\b([a-z]*i){3,}[a-z]*\b/i

{3} and {3,} (in the 2nd and 3rd solution shown above) both work because the problem states "at least" 3 occurrences, and also because there is a a [a-z]* afterwards, which shows that there can be zero or more letters afterwards before encounting a word boundary.
=end
