### Computational Complexity

##### Suggested Reading:

- Wikipedia: [Computational Complexity](https://en.wikipedia.org/wiki/Computational_complexity)

	- Be sure to understand the difference between best-case, worst-case and average-case complexity. Generally, what we care about is worst-case complexity (since people who design test cases for your code will usually try to come up with the most nefarious data possible).

- Geeks for Geeks: [Big-O notation](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/)

	- Most people in APCS should already be familiar with this.

- Geeks for Geeks: [Amortized Analysis](https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/)

	- This isn't that important for competitive programming, but it's good piece of knowledge to have under your belt.

##### Practice:

Calculate the big-O time complexity of the following (python) functions:

```python
def func(n):

	x = 0
	while x < n:
		x += 3

	return x
```

```python
def func(n):

	x = 1
	while x < n:
		x *= 10

	return x
```

```python
def func(n):

	x = 2
	while x < n:
		x *= x

	return x
```

```python
def func(n):

	x = 0
	y = 0
	while x < n:
		x += 3
		while y < x:
			y += 1

	return x
```

For the following, "n" is the size of the input list:

```python
def func(input_list):

	L = len(input_list)
	out = 0

	for x in input_list:
		out += x

	if L <= 1:
		return out

	half_a = input_list[:L//2]
	half_b = input_list[L//2:]

	return out + func(half_a) + func(half_b)
```

This one is especially difficult:

```python
def func(input_list):

	L = len(input_list)
	out = 0

	for x in input_list:
		for y in input_list:
			out += x*y

	if L <= 1:
		return out

	half_a = input_list[:L//2]
	half_b = input_list[L//2:]

	return out + func(half_a) + func(half_b)
```

<details>
<summary>Answers</summary>

1. $O(n)$
2. $O(\log n)$
3. $O(\log \log n)$
4. $O(n)$
5. $O(n \log n)$
6. $O(n^2)$
</details>