# Lesson 7: What are regular expressions?

## Intro (cont.)

That's simple enough. You could find every instance of "#" and then pull out the next 3 characters.

```python
def get_IDs(string):
  out = []
  index = -1
  while True:
    index = string.find('#', index + 1)
    if index == -1 or index >= len(string - 3):
      break
    else:
      out.append(string[index:index + 4])
  return out
```

Does anyone not understand this code?

[Back](lesson7_1.html) | [Next](lesson7_3.html)
