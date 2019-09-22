# Lesson 1: What is Python and how do we use it?

Python is a deceivingly simple programming language. A lot of the syntax sounds like regular English, but don't let this fool you: Python is a very powerful programming language.

## IDLE

The editor we will be using in this club is called IDLE. It is installed in every computer in front of you, and you should get it in your home machine if you want to code from home.

### IDLE Shell

When you first open up IDLE, you get the IDLE shell (by default). In the shell, we can run basic Python functions and commands.

You will generally use the shell to test one-line commands.

You guys should play around with the shell for a moment. Try doing some math!

### Operators

Python does infix notation for math stuff.

#### Arithmetic Operators
- `+` for addition
- `-` for subtraction
- `*` for multiplication
- `/` for division
- `%` for modulo
- `**` for exponentiation
- `//` floor division (rounds down)
  - This rounds towards -infinity
    - `3 // 4 --> 0`
    - `-3 // 4 --> -1`

#### Comparison Operators
- `==` for equality ("equals")
- `!=` for inequality ("not equals")
- `>` for greater than
- `<` for less than
- `>=` for greater than or equal to
- `<=` for less than or equal to

#### Membership Operators
These work on lists, tuples, etc.
- `in` checks if item is in the collection
- `not in` check is item is not in the collection

#### Logical Operators
- `and` is true if both operands are true
- `or` is true if at least one operand is true
- `not` reverses the logical state of the operand

### Variables

Before we get into functions and whatnot, it's good to know that we can store values for later use. We store these values in variables.

Variables, for the most part, can be named any alphanumeric string that doesn't have whitespace. Variables also cannot start with a number.

```python
a = 5
b = 3
c = a + b
d = 'Joan'
e = True
my_num_123 = 123

42_num = 42
works? = False
```

In the above examples, everything between `a` and `my_num_123`, inclusive, are valid variable names. Everything afterwards doesn't work.

You should always try to give your variables descriptive, but brief, names. For example, there is rarely a reason to name a variable `a`.

Finally, you can see that variables can have various different types. We will learn more about that later, but some simple types include `int`, `boolean`, and `string`.

An `int` is a whole number, like 34

A `boolean` is either `True` or `False`

A `string` is the equivalent of a word, like `'Joan'`

### IDLE Editor

If you open a new file (File -> New File), you get the IDLE editor. Here, you can do more complex stuff, like define functions.

To run whatever is in your editor, you can press F5. This will prompt you to save the file before you can run it.

Try writing math statements in the editor and then running the program. What happens?

[Next](lesson1_2.html)
