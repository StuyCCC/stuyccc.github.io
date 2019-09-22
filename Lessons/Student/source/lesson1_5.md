# Lesson 1: What is Python and how do we use it?

## Logic

Logic in Python has 3 different keywords: `if`, `elif`, and `else`

#### `if`

An `if` statement checks if a condition is True. If so, the `if` block is executed. This is always the first statement of a logic chain.

Here's an example:


```Python
if condition == True:
  # do this
```

#### `elif`
An `elif` statement comes directly after an `if` block or another `elif` block. This only attempts to execute if the previous block didn't execute.

Here is an example:

```Python
if 1 == 3:
  # this doesn't execute
  print('1 equals 3')
elif 5 == 4:
  # this also doesn't execute
  print('5 equals 4')
elif 9 == 9:
  # this executes!
  print('9 equals 9')
```

#### `else`

An `else` statement comes at the end of a logic chain. This will execute only if **nothing** else in the chain has executed.

Here's an example:

```Python

```


Logic statements are very useful in many scenarios.

Let's say we wanted to make a function that either added, subtracted, multiplied, or divided, based on what the user wants to do. How would we write this?

[Previous](lesson1_4.html) | [Next](lesson1_6.html)
