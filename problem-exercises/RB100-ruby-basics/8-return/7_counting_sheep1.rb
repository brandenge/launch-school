def count_sheep
  5.times do |sheep|
    puts sheep
  end
end

puts count_sheep

=begin
Output:

0
1
2
3
4
5

Note that the 5 at the end is outputted because of the last #puts that is outside of the method. The #times method returns self. self is the receiver of the method call, which in this case is the integer literal 5.
=end
