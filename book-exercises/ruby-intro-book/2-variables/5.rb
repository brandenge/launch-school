y = 0
3.times do
  y += 1
  x = y
end
puts x # Error: undefined local variable or method name 'x'.
# Variable initialized in inner scope cannot be accessed in outer scope.

x = 0
x = 3.times do
  x += 1
end
puts x # 3
# Variable initialized in outer scope can be accessed in inner scope.
