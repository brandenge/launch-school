def count_sheep
  5.times do |sheep|
    puts sheep
  end
  10
end

puts count_sheep

=begin
0
1
2
3
4
10

Internally, the .times function counts from 0 up to (and excluding) the integer that called it. And then finally, the last line is simply the integer 10, which gets implicitly returned because it is the last expression in the function body. 10 gets passed as the return value of count_sheep into the argument for the puts method and outputted.
=end
