=begin
There are 2 ways to create an object in Ruby:

1) Using the class method: new, as in <class_instance_name> = <class_name>.new
2) By declaring an object literal, using the assignment operator to save it to a variable.
=end

class SampleClass
  @sample_instance_variable = "This is an instance variable"
end

sample_class_instance = SampleClass.new
