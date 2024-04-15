let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (city of cities) {
  if (city !== null) console.log(city.length);
}
