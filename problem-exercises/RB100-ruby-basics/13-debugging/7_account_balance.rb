=begin
You forgot to add += when assigning the balance variable. So what is happening is you are re-assigning balance everytime you iterate to calculate each month, resulting in only saving the last month's balance. What we want to do is increment balance by adding the balance of every month for each iteration to the variable balance, which would result in the balance of all the months.
=end

balance = 0

january = {
  income: [ 1200, 75 ],
  expenses: [ 650, 140, 33.2, 100, 26.9, 78 ]
}

february = {
  income: [ 1200 ],
  expenses: [ 650, 140, 320, 46.7, 122.5 ]
}

march = {
  income: [ 1200, 10, 75 ],
  expenses: [ 650, 140, 350, 12, 59.9, 2.5 ]
}

def calculate_balance(month)
  plus  = month[:income].sum
  minus = month[:expenses].sum

  plus - minus
end

[january, february, march].each do |month|
  balance += calculate_balance(month)
end

puts balance

puts calculate_balance({ income: [], expenses: [] }) == 0         #=> true
puts calculate_balance({ income: [100], expenses: [] }) == 100    #=> true
puts calculate_balance({ income: [], expenses: [100] }) == -100   #=> true
puts calculate_balance({ income: [100], expenses: [50] }) == 50   #=> true
puts calculate_balance({ income: [4, 3], expenses: [2, 1] }) == 4 #=> true
