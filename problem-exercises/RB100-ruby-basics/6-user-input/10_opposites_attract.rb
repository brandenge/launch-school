def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

def get_valid_integer
  loop do
    puts ">> Please enter a positive or negative integer:"
    int = gets.chomp
    return int.to_i if valid_number?(int)
    puts ">> Invalid input. Only non-zero integers are allowed."
  end
end

loop do
  int1 = get_valid_integer
  int2 = get_valid_integer
  (puts "#{int1} + #{int2} = #{int1 + int2}"); break if int1 * int2 < 0
  puts ">> Sorry. One integer must be positive, one must be negative."
  puts ">> Please start over."
end
