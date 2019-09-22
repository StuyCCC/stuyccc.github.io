# Lesson 7: What are regular expressions?

## How do we use regular expressions in Python? (cont.)

Note that this is definitely not an exhaustive source of information about regexs. To find more information, you may visit the [how-to](https://docs.python.org/3/howto/regex.html) or the [documentation](https://docs.python.org/3/library/re.html)

## Exercises

_Please do these with a partner_

[This](data/regex.txt) file has a lot of text. There are IDs of the format "#", followed by at least one lowercase letter, followed by at least one digit. There is also a lot of random text surrounding these IDs. Additionally, there are _fake IDs_, such as `#fake`, `#123`, etc.

1. Find the sum of the digits of all of the valid IDs
2. Find the sum of the digits of all of the valid IDS that start with `#d`
3. Find the most common number combination in all of the IDs. Return a list of the alphabetic portion of the IDs. For example, if the input was
```python
#abc123 #lmao123 #yourmom888
```
you would return
```python
['abc', 'lmao']
```

[Back](lesson7_7.html)
