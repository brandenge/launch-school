/*
Which of the following values are valid keys for an object?

1
'1'
undefined
'hello world'
true
'true'

They are all valid keys, but the non-string values will be implicity type coerced into strings. This can cause a conflict with another property if it has the same string value. It is best to avoid this practice.
*/
