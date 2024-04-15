car = {
  type:  'sedan',
  color: 'blue',
  year:  2003
}
car = [[:type,  'sedan'], [:color, 'blue'], [:year,   2003]]
pp car

car = {
  type:  'sedan',
  color: 'blue',
  year:  2003
}
car = [
  [:type,  'sedan'],
  [:color, 'blue'],
  [:year,   2003]
]
pp car

car = {
  type:  'sedan',
  color: 'blue',
  year:  2003
}
car = car.to_a
pp car
