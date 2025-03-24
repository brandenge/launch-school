# *args parameter for variable arguments
# like a rest parameter in JavaScript
def find_first_nonzero_among(*numbers):
    for n in numbers:
        if n != 0:
            return n

print(find_first_nonzero_among(0, 0, 1, 0, 2, 0))
print(find_first_nonzero_among(1))
