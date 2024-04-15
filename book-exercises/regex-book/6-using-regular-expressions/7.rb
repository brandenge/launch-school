# Normal backreferences
def format_date1(date)
  date_regex = /\A(\d{4})([\-\/])(\d{2})\2(\d{2})\z/
  p date.sub(date_regex, '\4.\3.\1')
end

format_date1('2016-06-17') # -> '17.06.2016'
format_date1('2017/05/03') # -> '03.05.2017'
format_date1('2015/01-31') # -> '2015/01-31' (no change)

# Named capture groups both inside and outside the regex
def format_date2(date)
  date_regex = /\A(?<year>\d{4})(?<delimiter>[\-\/])(?<month>\d{2})\k<delimiter>(?<day>\d{2})\z/
  p date.sub(date_regex, '\k<day>.\k<month>.\k<year>')
end  

format_date2('2016-06-17') # -> '17.06.2016'
format_date2('2017/05/03') # -> '03.05.2017'
format_date2('2015/01-31') # -> '2015/01-31' (no change)

# Named capture groups using symbol key to a MatchData object
def format_date3(date)
  date_regex = /\A(?<year>\d{4})(?<delimiter>[\-\/])(?<month>\d{2})\k<delimiter>(?<day>\d{2})\z/
  if match = date.match(date_regex)
    p "#{match[:day]}.#{match[:month]}.#{match[:year]}"
  else
    p date # This is needed to output the unmodified string when it fails, otherwise it would be nil.
  end
end

format_date3('2016-06-17') # -> '17.06.2016'
format_date3('2017/05/03') # -> '03.05.2017'
format_date3('2015/01-31') # -> '2015/01-31' (no change)
