from functools import reduce

def digit_product(str_num):
    return reduce(lambda a, b: int(a) * int(b), str_num, 1)

result = digit_product('12345')
print(result)  # expected: 120, actual: 0
