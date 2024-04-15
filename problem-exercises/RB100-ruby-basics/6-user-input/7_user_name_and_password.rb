USERNAME = "admin"
PASSWORD = "SecreT"

loop do
  puts ">> Please enter user name:"
  username_try = gets.chomp

  puts ">> Please enter your password:"
  password_try = gets.chomp

  break if (USERNAME == username_try && PASSWORD == password_try)
  puts ">> Authorization failed!"
end

puts "Welcomee!"
