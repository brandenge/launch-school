arr = [1, 3, 5, 7, 9, 11]
number = 3

puts "#{number} is in the array." if arr.include?(number)

arr.each do |num|
  puts "#{number} is still in the array." if num == number
end
