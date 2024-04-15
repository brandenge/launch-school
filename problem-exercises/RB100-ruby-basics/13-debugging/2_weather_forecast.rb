=begin
The problem is on the line with the if statement. It is essentially saying "if the sunshine variable exists.." which will always evaluate to true, because it does exist. It needs to compare sunshine to to one of its possible strings that it is being sampled from.

Note that this problem would not exist if the array being sampled for the variable sunshine contained the boolean values true or false. It is because they are stored as strings in the array. So either change the values in the array to boolean values, or if keeping them as strings, then you must use the comparison operator with the if statement, or else it will always evaluate as a truthy value.

Below is the fix.
=end

def predict_weather
  sunshine = [true, false].sample

  if sunshine
    puts "Today's weather will be sunny!"
  else
    puts "Today's weather will be cloudy!"
  end
end

predict_weather
