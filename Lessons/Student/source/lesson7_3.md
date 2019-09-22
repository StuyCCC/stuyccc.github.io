# Lesson 7: What are regular expressions?

## Intro (cont.)

Now here's a trickier one:

What if the format of the IDs were "#", followed by at least one lowercase letter, followed by at least one digit?

For example:
```
"Dude bro #dndn71881 some random text here and now bam! #h9991

lmao nothing here

whoah they're not the same length! #heresanotherone1337

#thisdoesntcount

neither does this #13141"
```

Admittedly, this can be done in a similar way than the other one. I think something like this could work

```python
def isID(token):
	if len(token) < 3:
		return False
	if token[0] != '#':
		return False
	l = True
	d = False
	for char in token[1:]:
		if l:
			if not 97 <= ord(char) <= 122:
				l = False
				d = True
		if d:
			if not 48 <= ord(char) <= 57:
				return False
	return d

  def get_IDs(string):
  	tokens = string.split(' ')
  	out = []
  	for token in tokens:
  		if isID(token):
  			out.append(token)
  	return out
```

I will explain this briefly, but it's not very crucial for our lesson.

How could we make the process of finding IDs easier?

[Back](lesson7_2.html) | [Next](lesson7_4.html)
