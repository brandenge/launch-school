def recursive_countdown(integer)
  puts integer
  recursive_countdown(integer - 1) if integer > 0
end

recursive_countdown(0)
recursive_countdown(1)
recursive_countdown(5)
recursive_countdown(10)
recursive_countdown(-10)
recursive_countdown(100)
