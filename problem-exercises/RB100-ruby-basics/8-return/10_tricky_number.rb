def tricky_number
  if true
    number = 1
  else
    2
  end
end

puts tricky_number

=begin
Output:

1

The assignment statement inside the body of the function returns the value of its right operand. This is also the last expression in the if/else statement, which becomes the return value of the if/else statement. The if/else statement is the last statement in the function body as a whole, so the return value of the if/else statement (which is 1) is also what is implicitly returned from the function. 1 gets passed into the puts method for output.
=end
