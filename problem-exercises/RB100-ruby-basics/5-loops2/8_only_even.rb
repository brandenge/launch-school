number = 0

until number == 10
  number += 1
  puts number.odd? ? next : number
end

number = 0

until number == 10
  number += 1
  next if number.odd?
  puts number
end

=begin
Further exploration:

next has to be put after the incrementation of number or else each iteration of the loop will never progress the number. It will be stuck at the next odd number (in this case, the number 1) and then be stuck there in an infinite process_the_loop.

next has to be put before #puts or else it will output the odd numbers too, and will therefore be effectively doing nothing to change the behavior or output.
=end
