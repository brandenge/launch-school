module SubclassModule
  def to_s
    "This is the subclass module."
  end
end

module SuperclassModule
  def to_s
    "This is the superclass module."
  end
end

class Superclass
  include SuperclassModule
end

class Subclass < Superclass
  include SubclassModule
  def to_s
    "This is the subclass. " + super
  end
end

subclass_instance = Subclass.new
puts "The Method Lookup Path is as follows:"
puts Subclass.ancestors
puts subclass_instance
