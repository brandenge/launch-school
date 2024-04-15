movie_years = {
  movie_from_1975: 1975,
  movie_from_2004: 2004,
  movie_from_2013: 2013,
  movie_from_2001: 2001,
  movie_from_1981: 1981
}

movie_years.each_value { |year| puts year }
movie_years_array = Array.new
movie_years.each_value { |year| movie_years_array << year }
movie_years_array.each { |year| puts year }
