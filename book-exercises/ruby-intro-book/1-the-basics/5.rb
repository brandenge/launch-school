# Preconditions:
# 1) Integer must be a non-negative integer, i.e. integer >= 0
# 2) For the recursive version, if integer is equal to 0 or 1, then you cannot
# override the default parameter values initializing factorial and i equal to 1.
# Recursive loop
def fact1(integer, factorial = 1, i = 1)
  if i > integer
    puts_fact(1, integer, factorial)
    return
  end
  factorial *= i
  i += 1
  fact1(integer, factorial, i)
end

# While loop
def fact2(integer)
  factorial = 1
  i = 1
  while i <= integer do
    factorial *= i
    i += 1
  end
  puts_fact(2, integer, factorial)
  return
end

# Until loop
def fact3(integer)
  factorial = 1
  i = 1
  until i > integer do
    factorial *= i
    i += 1
  end
  puts_fact(3, integer, factorial)
  return
end

# For loop
def fact4(integer)
  factorial = 1
  for i in 1..integer do
    factorial *= i
  end
  puts_fact(4, integer, factorial)
  return
end

def fact_recursive_integers(integer, i = 0)
  return if i > integer
  fact_recursive_methods(i)
  i += 1
  fact_recursive_integers(integer, i)
end

def fact_recursive_methods(integer, i = 1)
  return if i > 4
  eval("fact#{i}(integer)")
  i += 1
  fact_recursive_methods(integer, i)
end

def puts_fact(method_num, integer, factorial)
  puts "fact#{method_num}: The factorial of #{integer} is equal to: #{factorial}."
  return
end

fact_recursive_integers(10)
fact_recursive_methods(87)
