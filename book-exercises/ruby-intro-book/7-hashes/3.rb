hash = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10}
hash.each_key { |key| print "#{key}\n" }
hash.each_value { |value| print "#{value}\n" }
hash.each { |key, value| print "#{key}: #{value}\n" }
