def execute(&block)
  block
end

execute { puts "Hello from inside the execute method!" }
# This program will not output anything because there is no .call on the block
# inside of the method definition. The .call method activates the block.
# So the 2nd line of code needs to be: block.call.
