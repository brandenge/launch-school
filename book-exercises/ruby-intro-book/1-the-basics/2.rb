# Preconditions:
# 1) num must be a 4 digit number.
# 2) num cannot start with any number of zeros.
# 3) If num is negative, num does not need to return the first digit negative.
def find_digits_in_4_digit_number(num)
  num = num.abs
  first_digit = num / 1000
  second_digit = (num % 1000) / 100
  third_digit = (num % 100) / 10
  fourth_digit = num % 10

  return [first_digit, second_digit, third_digit, fourth_digit]
end

find_digits_in_4_digit_number(9753)
find_digits_in_4_digit_number(-9753)
find_digits_in_4_digit_number(4567)
find_digits_in_4_digit_number(-4567)

# Recursive version of same method that can handle any number of digits.
def digits_array(number, digits_array)
  number = number.abs if number < 0
  number_of_digits = number.to_s.length
  modulus = modulus_for_digits_array('1', number_of_digits).to_i
  if modulus == 1
    return digits_array << number
  else
    digits_array << number / modulus
    number %= modulus
    digits_array(number, digits_array)
  end
end

def modulus_for_digits_array(modulus, number_of_digits)
  return modulus if number_of_digits == 1
  modulus += '0'
  number_of_digits -= 1
  modulus_for_digits_array(modulus, number_of_digits)
end

digits_array(9753, [])
digits_array(-9753, [])
digits_array(4567, [])
digits_array(-4567, [])
