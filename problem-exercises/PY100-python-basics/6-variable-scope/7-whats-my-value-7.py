a = 1

def my_function():
    global a
    a = 2

my_function()
print(a)  # 2
