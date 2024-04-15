x = [1, 2, 3, 4, 5]
x.each do |a|
  a + 1
end

print y

=begin
The .each method here returns the array that was passed to it, unchanged. This is a feature of the .each method itself. Even with an assignment statement, the array is still returned unchanged. To save the modified array, you would need to save it to a new variable that was initialized outside of the array, or you could use a different iterator method such as .map which does feature returning the new modified array.
=end
