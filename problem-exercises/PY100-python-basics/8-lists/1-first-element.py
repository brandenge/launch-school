def first(lst):
  return lst[0] if len(lst) > 0 else None

print(first(['Earth', 'Moon', 'Mars']))  # Earth
print(first([]))  # Earth
