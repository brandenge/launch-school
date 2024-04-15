PASSWORD = "SecreT"

loop do
  puts "Please enter your password:"
  gets.chomp == PASSWORD ? ((puts "Welcome!"); break;) : (puts "Invalid password!")
end

PASSWORD = "SecreT"

loop do
  puts "Please enter your password:"
  ((puts "Welcome!"); break;) if gets.chomp == PASSWORD
  puts "Invalid password!"
end
