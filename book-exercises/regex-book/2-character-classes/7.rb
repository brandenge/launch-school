=begin
No, /(ABC|abc)/ and /[Aa][Bb][Cc]/ are not equivalent regex.

/(ABC|abc)/ has 2 possible matches:
1) "abc"
2) "ABC"

Note that the letters must be either all uppercase or all lowercase together.

/[Aa][Bb][Cc]/ has 8 possible matches:
1) "abc"
2) "ABC"
3) "Abc"
4) "aBc"
5) "abC"
6) "ABc"
7) "aBC"
8) "AbC"

Note that it accepts any combination of uppercase and lowercase letters, including mixing uppercase and lowercase together.

So the last 6 matches in that list would be all of the strings that would match the 2nd regex, but not the 1st, to prove the difference between the two.
=end
