status = ['awake', 'tired'].sample

message =
  if status == 'awake'
    "Be productive!"
  else
    "Go to sleep!"
  end

puts message
