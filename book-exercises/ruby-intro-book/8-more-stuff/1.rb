string_array = [
  "laboratory",
  "experiment",
  "Pans Labryinth",
  "elaborate",
  "polar bear"
]

def strings_with_lab(string_array)
  string_array.each do |string|
    if string =~ /lab/i # the i at the end makes the match case insensitive
      puts string
    else
      puts "No match"
    end
  end
end

strings_with_lab(string_array)
