=begin
In the sample code, you are trying to call a private method with an explicit receiver, which is what is causing the error. To fix the problem, create another public instance method that calls the private 'hi' method from within the class. Then call this new public instance method with the explcit receiver, instead of the private method.

Or, if you are okay with removing the private protection from the hi method, then you can just move it to above the private keyword in the class to make it a public method. Then you will be able to call it with an explicit receiver.
=end
