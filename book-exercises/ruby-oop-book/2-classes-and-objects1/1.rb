class MyCar
  attr_accessor :year, :model, :color, :speed

  def initialize(year, model, color)
    self.year = year
    self.model = model
    self.color = color
    self.speed = 0
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
end

avenger = MyCar.new(2010, 'dodge avenger', 'silver')
p avenger
avenger.accelerate(10)
avenger.current_speed
avenger.accelerate(20)
avenger.current_speed
avenger.decelerate(15)
avenger.current_speed
avenger.decelerate(5)
avenger.current_speed
avenger.shut_off
avenger.current_speed
