class MyCar
  attr_accessor :color, :speed
  attr_reader :year

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @speed = 0
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
p avenger.year
p avenger.color
avenger.color = 'black'
p avenger.color
