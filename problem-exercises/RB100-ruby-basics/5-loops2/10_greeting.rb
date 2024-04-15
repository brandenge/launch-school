def greeting
  number_of_greetings = 2
  while number_of_greetings > 0
    puts 'Hello!'
    number_of_greetings -= 1
  end
end
greeting

def greeting(number_of_greetings)
  while number_of_greetings > 0
    puts 'Hello!'
    number_of_greetings -= 1
  end
end
greeting(2)

def greeting
  puts 'Hello!'
end

number_of_greetings = 2

while number_of_greetings > 0
  greeting
  number_of_greetings -= 1
end
