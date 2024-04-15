def count_sheep
  5.times do |sheep|
    puts sheep
    if sheep >= 2
      return
    end
  end
end

p count_sheep

=begin
Output:

0
1
2
nil

As soon as sheep equals 2, it enters the conditional statement and explicitly returns from the function. Because no value/expression is provided with the return keyword, it defaults to returning nil. nil then gets passed into the p method for output.
=end
