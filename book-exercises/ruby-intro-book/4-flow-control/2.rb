def all_caps(string)
  return string.upcase if string.length > 10
  return string
end

puts all_caps("hello world")
puts all_caps("all caps?")
