# number ^ 2 exponential notation
def number_squared1(number)
  puts number ** 2
end

# number * number notation
def number_squared2(number)
  puts number *= number
end

# loop through integers only
def loop_squared_methods(integer, i = -10)
  return if i > integer
  number_squared1(i)
  number_squared2(i)
  i += 1
  loop_squared_methods(integer, i)
end

loop_squared_methods(10)
number_squared1(1.1)
number_squared2(1.1)
number_squared1(12.8)
number_squared2(12.8)
number_squared1(145.7889)
number_squared2(145.7889)
