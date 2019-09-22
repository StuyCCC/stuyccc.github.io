# Lesson 1: What is Python and how do we use it?

## Logic (cont.)

We could write:

```Python
# operation can be 0, 1, 2, or 3
# 0 -> add
# 1 -> subtract
# 2 -> multiply
# 3 -> divide
# anything else -> return Nani
def func(a, b, operation):
  if operation == 0:
    return a + b
  elif operation == 1:
    return a - b
  elif operation == 2:
    return a * b
  elif operation == 3:
    return a / b
  else:
    return 'Nani?'
```

Any questions?

[Previous](lesson1_5.html) | [Next](lesson1_7.html)
