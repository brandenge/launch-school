arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
arr.delete_if { |str| str.start_with?(/s/) }
# => ["winter", "ice", "white trees"]

arr = ['snow', 'winter', 'ice', 'slippery', 'salted roads', 'white trees']
arr.delete_if { |str| str.start_with?(/s/, /w/) }
# => ["ice"]
