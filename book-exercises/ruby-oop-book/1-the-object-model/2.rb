module SampleModule
  def test
    puts "The test of SampleModule is successful."
  end
end

class SampleClass
  include SampleModule
  @sample_instance_variable = "This is an instance variable"
end

sample_class_instance = SampleClass.new

sample_class_instance.test
puts SampleClass.ancestors
