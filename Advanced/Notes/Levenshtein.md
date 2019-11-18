### Notes on the Levenshtein Distance Problem

##### Problem Statement

There are $3$ operations we can perform on a string:

1. Insert any character at any location
2. Delete any character at any location
3. Replace any character with any other character

Suppose we are given two strings, $A$ and $B$. We want to design a function, called $dist(A,B)$, which will return the "edit distance" between $A$ and $B$. The edit distance is defined as the minimum number of operations required to convert one string to the other.

For instance, $dist("cat","art")=2$, since we can convert $"cat"$ into $"art"$ by deleting the $"c"$ and then adding an $"r"$.

##### Solution

As always, the best way to approach this problem is to try and make some observations about the problem that we can use to help us arrive at a solution. Let's begin:

- We can see that $dist(A,B)=dist(B,A)$, since every operation can be reversed using other operations, i.e. (1) and (3) reverse each other, and (2) is it's own reverse.
- If $A$ and $B$ have the same first character, then $dist(A,B)=dist(A[1...],B[1...])$.
- If $A$ and $B$ don't have the same first character, we need to perform some operation on $A$ that causes it to have the same first character as $B$. We have three choices:
	1. Insert the first character of $B$ at the beginning of $A$.
	2. Delete the first character of $A$ and hope to get lucky.
	3. Replace the first character of $A$ with the first character of $B$.

What you should notice is that we've now described a recursive way of solving this problem. Let's write a function $f(i,j)$ that will compute the distance between the substrings $A[i...]$ and $[j...]$. Note that $f(0,0)$ is our end goal. Note also that if $i=|A|$ or $j=|B|$, then we have the empty string on one side, and thus $f(i,j)$ simply equals the length of the longer string. Anyway, since we want to minimize the number of operations we have to perform, let's just try all three of the potential operations above and then take the minimum of the answers we get.

1. If we choose option (1), then we have $f(i,j)=1+f(i,j+1)$. This uses the second observation above.
2. With option (2), $f(i,j)=1+f(i+1,j)$.
3. With option (3), $f(i,j)=1+f(i,j+1)$, again using the second observation above.
4. Finally, if $A[i]=B[j]$, then we can simply say $f(i,j)=f(i+1,j+1)$.

This is enough to create a complete formula for $f$. We notice that there are only $|A||B|$ possible inputs for $f$, meaning we can create an $O(|A||B|)$ DP algorithm to solve this problem. We'll use a 2D array with a bottom-up DP approach. Here's a solution in Python. Note that in this solution, I started from the end of the strings and worked my way backwards. The algorithm works the exact same way.


```python
import itertools

def distance(A, B):
	N, M = len(A) + 1, len(B) + 1

	# create a 2D array for storing values of f(i,j)
	memo = [[0 for _ in range(M)] for _ in range(N)]

	# compute each value of f(i,j), and store the result in memo[i][j].
	for i, j in itertools.product(range(N), range(M)):

		if min(i, j) == 0:
			memo[i][j] = max(i, j)
		else if A[i-1] == B[j-1]:
			memo[i][j] = memo[i-1][j-1]
		else:
			memo[i][j] = 1 + min(memo[i-1][j-1], memo[i-1][j], memo[i][j-1])

	return memo[-1][-1]
```