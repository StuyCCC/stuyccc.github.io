### Hash Maps and Sets

##### Suggested Reading:

- CMU: [Hashing](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Hashing/hashing.html)

	- You don't need to know all the details of how hashing works. We just need to be able to use maps and sets in our code.

- W3schools: [Python Dictionaries](https://www.w3schools.com/python/python_dictionaries.asp)

	- Dictionaries in Python are hash maps.

##### Practice:

For these problems, you can either write code in your favorite programming language, or just describe an algorithm in pseudo-code (or just come up with the algorithm in your head and move on).

- Given an array of strings, return whether the array contains any duplicates. Do it in $O(n)$ time.
```C
Sample Input:  ["hey", "hello", "hey", "hi"]
Sample Output: true
```

- Given an array of strings, return the numbers of occurences of the string which occurs most frequently in the array. Do it in $O(n)$ time.
```C
Sample Input:  ["hey", "hello", "hey", "hi", "hey", "hi"]
Sample Output: 3
```

- Suppose you have a string composed solely of "a"s and "b"s, for example: "abbbab". We will say that the "complement" of each string is another string where "a"s have been replaced with "b"s and vice-versa. So the complement of "abbbab" is "baaaba". Given an array of strings made of "a"s and "b"s, without any duplicate strings, return the number of strings in the array who also have their complement in the array (note that this is always an even number). Do it in $O(n)$ time.
```C
Sample Input:  ["abb", "aba", "baa", "bba", "bab", "aaa"]
Sample Output: 4
```

- All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA. Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. Do it in $O(n)$ time. ([source](https://leetcode.com/problems/repeated-dna-sequences/))
```C
Sample Input:  "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Sample Output: ["AAAAACCCCC", "CCCCCAAAAA"]
```

	- Follow-up question: can you solve this problem, but instead of finding sequences of 10 letters, you find sequences of $k$ letters, while still running in $O(n)$ time (not $O(nk)$)? This is a much harder problem which uses techniques we haven't covered yet.

- Given a rectangular 2D array consisting of 0s and 1s, we may choose any number of columns in the array and flip every cell in that column. Flipping a cell changes the value of that cell from 0 to 1 or from 1 to 0. Return the maximum number of rows that have all values equal after some number of flips. Do it in $O(mn)$ time, where $m$ and $n$ are the dimensions of the array. ([source](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/))
```C
Sample Input:  [[0,0,0],[0,0,1],[1,1,0]]
Sample Output: 2
```