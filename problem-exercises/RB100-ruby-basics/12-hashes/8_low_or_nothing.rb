numbers = {
  high:   100,
  medium: 50,
  low:    10
}

p low_numbers = numbers.select! { |key, value| value < 25 }
p numbers
