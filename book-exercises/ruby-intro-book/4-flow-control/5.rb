def equal_to_four(x)
  if x == 4
    puts "yup"
  else
    puts "nope"
  end # Added an end here
end

equal_to_four(5)

=begin
end There is a missing 'end' statement here to close the method definition. The current lone end statement only closes the if..else statement, despite the lack of indentation on it implying the intent of it to close the method definition. So another 'end' keyword needs to be added below line 5. Two end statements are needed: 1 to close the if..else statement, and 1 to close the method definition.
=end
