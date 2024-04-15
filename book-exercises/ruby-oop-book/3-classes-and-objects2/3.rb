class Person
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

bob = Person.new("Steve")
p bob
bob.name = "Bob"
p bob

=begin
The reason for the error is that there is only a attribute reader / getter method, and not a attributer writer / setter method.

Line 9 is attempting to call the setter method by the name of name= but that method does not exist without the attribute writer / setter method.

We can fix this by either adding attr_writer :name just underneath the attr_reader method on line 2. Or else replace line 2 with attr_accessor :name to cover both the reader and writer (getter and setter) in a single line.
=end
