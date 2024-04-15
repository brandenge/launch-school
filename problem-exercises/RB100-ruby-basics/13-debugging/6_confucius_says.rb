=begin
What is happening here is that there is no explicit return statement, so the method will always implicitly return the last evaluated expression. In this case, when #get_quote is invoked with the argument 'Yoda' or 'Confucius', it will enter a conditional statement with a string. But because that is not the last statement in the method body, it will then exit from the conditional statement (doing nothing with the string that it evaluated inside of the conditional), and then continue evaluating the body of the method. In this case, the last expression to be evaluated in the method body is:

if person == 'Einstein'

So for any argument that was not equal to 'Einstein', this statement will return nil, and then nil is what gets returned from the method.

Note that the only way the code works as it is, is if you invoked the method with the argument 'Einstein' instead, because then the string inside of the conditional statement for person == 'Einstein' will be the last statement evaluated, and will be implicitly returned correctly.

So to fix this, we simply need to add explicit return statements to the strings inside of the conditional statements. Or you need to combine all of these separate if statements into one single if statement, using elsif and else. You could also use a case statement.
=end

def get_quote(person)
  if person == 'Yoda'
    return 'Do. Or do not. There is no try.'
  end

  if person == 'Confucius'
    return 'I hear and I forget. I see and I remember. I do and I understand.'
  end

  if person == 'Einstein'
    return 'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts "\"#{get_quote('Confucius')}\""

def get_quote(person)
  if person == 'Yoda'
    'Do. Or do not. There is no try.'
  elsif person == 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  elsif person == 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts "\"#{get_quote('Confucius')}\""

def get_quote(person)
  case person
  when 'Yoda'
    'Do. Or do not. There is no try.'
  when 'Confucius'
    'I hear and I forget. I see and I remember. I do and I understand.'
  when 'Einstein'
    'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
  end
end

puts 'Confucius says:'
puts "\"#{get_quote('Confucius')}\""
