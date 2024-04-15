=begin
/<h1>.*?<\/h1>/

If you omit the ? (question mark character) then it will become a greedy match, which will make the match as long as possible. In this situation, it means that the regex engine will go to the end and then backtrack to find the last </h> closing tag, which will skip over any additional </h> closing tags that were inbetween (whenever there are multiple </h> closing tags), which is not what we want here. Therefore, we need the lazy match.
=end
