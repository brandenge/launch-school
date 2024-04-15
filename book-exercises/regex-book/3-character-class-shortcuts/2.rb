=begin
Why is it that this pattern doesn't include the three-letter words Doc, red, box, or Hup, but it does match 2 3?

1) "Doc" doesn't match because it occurs at the start of a string, and there is no whitespace character at the start of a string by default (there is no newline character hidden at the start of a string by default). Note that the ends of strings may or may not have a terminating newline character as well.

2) "red" doesn't match because the whitespace character in front of it is being used by the match for " big " in front of it.

3) "box" doesn't match because it is followed by a period instead of a whitespace character.

4) "Hup" doesn't match because it is followed by an exclamation point instead of a whitespace character.

5) "2 3" matches because the . (dot or period) meta-character also matches numbers and spaces, not just letters (it matches any character except newline).
=end
