names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  names.empty? ? break : (puts names.shift)
end

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  puts names.shift
  break if names.empty?
end

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  break if names == []
  puts names.pop
end

names = ['Sally', 'Joe', 'Lisa', 'Henry']

loop do
  break if names == []
  puts names.first
  names.delete(names.first)
end
