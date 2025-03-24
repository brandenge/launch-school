a = 1

def my_function():
    print(a)
    a = 2  # UnboundLocalError: local variable 'a' referenced before assignment

my_function()
