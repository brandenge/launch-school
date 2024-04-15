module Tow
  def tow_vehicle(towed_vehicle)
    puts "You are now towing a #{towed_vehicle}."
  end
end

class Vehicle
  attr_accessor :year, :model, :color, :speed
  @@num_vehicles = 0

  def self.print_total
    puts "The total number of vehicles is #{@@num_vehicles}"
  end

  def self.gas_mileage(miles, gallons)
    puts "#{miles / gallons} miles per gallon of gas."
  end

  def initialize(year, model, color)
    self.year = year
    self.model = model
    self.color = color
    self.speed = 0
    @@num_vehicles += 1
  end

  def accelerate(num)
    self.speed += num
    puts "You push the gas and accelerate #{num} mph."
  end

  def decelerate(num)
    self.speed -= num
    puts "You push the brake and decelerate #{num} mph."
  end

  def current_speed
    puts "You are now going #{self.speed} mph."
  end

  def shut_off
    self.speed = 0
    puts "Let's park this bad boy!"
  end

  def spray_paint(color)
    self.color = color
    puts "Your new #{color} paint job looks great!"
  end

  def to_s
    ("Class Name: #{self.class}\n"\
    "Year: #{self.year}\n"\
    "Model: #{self.model}\n"\
    "Color: #{self.color}\n"\
    "Speed: #{self.speed}")
  end
end

class MyCar < Vehicle
  VEHICLE_TYPE = "Car"

  def initialize(year, model, color)
    super
  end
end

class MyTruck < Vehicle
  include Tow
  VEHICLE_TYPE = "Truck"

  def initialize(year, model, color)
    super
  end
end

puts "Vehicle Ancestor Chain:"
puts Vehicle.ancestors
puts "MyTruck Ancestor Chain:"
puts MyTruck.ancestors
puts "MyCar Ancestor Chain:"
puts MyCar.ancestors
