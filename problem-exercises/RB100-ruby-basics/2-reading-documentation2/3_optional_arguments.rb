s = 'abc def ghi,jkl mno pqr,stu vwx yz'
puts s.split.inspect
# => ["abc", "def", "ghi,jkl", "mno", "pqr,stu", "vwx", "yz"]

puts s.split(',').inspect
# => ["abc def ghi", "jkl mno pqr", "stu vwx yz"]

puts s.split(',', 2).inspect
# => ["abc def ghi", "jkl mno pqr,stu vwx yz"]
