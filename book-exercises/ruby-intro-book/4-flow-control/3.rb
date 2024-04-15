puts "Please enter a number between 0 and 100."
num = gets.chomp.to_i

answer = case
  when 0 <= num && num <= 50 then "#{num} is between 0 and 50." break
  when 50 < num && num <= 100 then "#{num} is between 51 and 100." break
  when 100 < num then "#{num} is above 100." break
  else "You did not enter a positive number."
end

puts answer
