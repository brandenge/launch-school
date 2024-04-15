[['Dave', 7], ['Miranda', 3], ['Jason', 11]]

[
  ['Dave', 7],
  ['Miranda', 3],
  ['Jason', 11]
]

# Solving it with code:

arr = ['Dave', 7, 'Miranda', 3, 'Jason', 11]
nested_arr = []
i = 0
loop do
  nested_arr[i] = Array.new
  nested_arr[i][0] = arr.shift
  nested_arr[i][1] = arr.shift
  break if arr == []
  i += 1
end
p nested_arr

arr = ['Dave', 7, 'Miranda', 3, 'Jason', 11]
nested_arr = []
temp_arr = []

arr.each do |item|
  temp_arr << item
  if temp_arr.size == 2
    nested_arr << temp_arr
    temp_arr = []
  end
end
p nested_arr
