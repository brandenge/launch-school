from datetime import date

today = date.today()

today_year = today.year # Gregorian calender year
# ISO year is different from Gregorian calender year
iso_year = today.isocalendar()[0] # ISO calender year
print(today_year)
print(iso_year)
