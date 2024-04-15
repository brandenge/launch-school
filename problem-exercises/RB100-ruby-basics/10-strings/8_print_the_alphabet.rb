alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet.each_char { |char| puts char }

alphabet = 'abcdefghijklmnopqrstuvwxyz'
puts alphabet.split('')

alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet.chars.each {|c| puts c }

alphabet = 'abcdefghijklmnopqrstuvwxyz'
puts alphabet.split(//) # empty regular expression

alphabet = 'abcdefghijklmnopqrstuvwxyz'
alphabet.split(%r{\s*}).each {|item| puts item }
