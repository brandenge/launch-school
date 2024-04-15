name = 'Somebody Else'

def print_full_name(first_name, last_name)
  name1 = first_name + ' ' + last_name
  # The below line of code will throw an error because it is not initialized in
  # the method's self-contained scope. Method's self-contained scope cannot
  # access variables initialized in outer scope, unlike blocks/Procs/lambdas.
  puts name
end

print_full_name 'Peter', 'Henry'
print_full_name 'Lynn', 'Blake'
print_full_name 'Kim', 'Johansson'
puts name
