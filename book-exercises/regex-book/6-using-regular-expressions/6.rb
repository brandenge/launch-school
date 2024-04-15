def format_date(date)
  p date.sub(/\A(\d{4})-(\d{2})-(\d{2})\z/, '\3.\2.\1')
end

format_date('2016-06-17') # -> '17.06.2016'
format_date('2016/06/17') # -> '2016/06/17' (no change)
