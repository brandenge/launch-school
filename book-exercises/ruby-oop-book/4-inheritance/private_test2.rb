class Animal
  def a_public_method
    "Will this work? " + self.a_protected_method
  end

  private def a_protected_method
    "Yes, I'm protected!"
  end
end

fido = Animal.new
puts fido.a_public_method        # => Will this work? Yes, I'm protected!
