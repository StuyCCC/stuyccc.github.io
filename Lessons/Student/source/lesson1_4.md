# Lesson 1: What is Python and how do we use it?

### Printing/Returning (cont.)
Nope.

When you print a value, it is only seen by the user. The computer just spits the value out on the screen, then forgets about it. To use the values from a function, we need the keyword `return`

`return` will spit out the value to the computer rather than on the screen.

We could write

```Python
def add_two(a, b):
  return a + b

def add_three(a, b, c):
  return add_two(a, add_two(b, c))
```

This will work. In fact, y'all should test it!

### Comments

Comments are very important in any computer language. When you define a function, you should at least write a comment above the function declaring what the function does.

Comments will be ignored by the interpreter, so it's only used to let yourself and others know what you're doing

For example
```python
# This function does something
def foo():
  # code goes here
```

[Previous](lesson1_3.html) | [Next](lesson1_5.html)
