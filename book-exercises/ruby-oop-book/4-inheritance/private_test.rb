class TestClass

  def self.method1
    "I am a public method. #{self.method2}."
  end

  private # This is not working properly for any method used with an explicit receiver.

  def self.method2
    "I am a private method"
  end
end

puts TestClass.method1

# test2 = TestClass.new
# puts test2.method1
