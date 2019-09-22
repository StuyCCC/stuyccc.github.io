# Lesson 1: What is Python and how do we use it?

### Printing/Returning

The correct answer is "nothing".

Though your computer added a and b, you didn't tell it to do anything with the sum.

The keyword function `print()` prints out some expression.

```python
def add_two(a, b):
  print(a + b);
```

Try running the code above. It should print the correct answer for the numbers you give it.

What if we want to add 3 numbers using the add_two function we just defined (and no plus signs)?

```python
def add_three(a, b, c):
  print(add_two(a, add_two(b, c)))
```

This should work, right?

[Previous](lesson1_2.html) | [Next](lesson1_4.html)
