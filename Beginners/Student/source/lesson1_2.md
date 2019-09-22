# Lesson 1: What is Python and how do we use it?

### IDLE Editor (cont.)

Presumably, nothing happened.

This is a good segue into Python syntax

## How do I write Python?

Just to be clear: we will not learn all of Python in this lesson. This is fairly simple, and we will learn more as we go on.

### Functions

In the shell, you could run simple commands like `3 + 3`

Though you can do this in the editor, it's strongly recommended that you encapsulate code within functions

To define a function in Python, you use the keyword `def`

```python
def foo():
  <code goes here>
```

This defines the function `foo`

**`def foo()` is called the function header**

As we can see, the code block must be indented. This is how Python is organized. We will go further into detail about this at the end of the lesson.

Functions can also take arguments.

```python
def add_two(a, b):
  a + b
```

This takes 2 arguments and attempts to add them. Try writing this on your editor and running it. You'll need to press F5, save the file, and type the function into the shell like so

```Python
>>> add_two(1, 2)
```

What happens?

[Previous](lesson1_1.html) | [Next](lesson1_3.html)
