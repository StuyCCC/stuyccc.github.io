### Stacks and Queues

##### Suggested Reading:

- CMU: [Stacks and Queues](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Stacks%20and%20Queues/Stacks%20and%20Queues.html)

	- This is a relatively easy topic, so this should be all you really need.

- Note that in python, a normal list can be used as a stack. If you want a queue, your best option is to `import collections` and use a `collections.deque()`, which is a [double-ended queue](https://en.wikipedia.org/wiki/Double-ended_queue).

##### Practice:

###### 1
Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
An input string is valid if (a) Open brackets must be closed by the same type of brackets and (b) Open brackets must be closed in the correct order.
Note that an empty string is also considered valid. Do it in $O(n)$ time. ([source](https://leetcode.com/problems/valid-parentheses/))
```C
Sample Input:  "(([]){[]()})"
Sample Output: true
Sample Input:  "([)]"
Sample Output: false
```
###### 2
A valid parentheses string is either empty "", "(" + $A$ + ")", or $A + B$, where $A$ and $B$ are valid parentheses strings, and $+$ represents string concatenation.  For example, `""`, `"()"`, `"(())()"`, and `"(()(()))"` are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into $S = A+B$, with $A$ and $B$ nonempty valid parentheses strings.

Given a valid parentheses string $S$, consider its primitive decomposition: $S = P_1 + P_2 + ... + P_k$, where $P_i$ are primitive valid parentheses strings.
Return $S$ after removing the outermost parentheses of every primitive string in the primitive decomposition of $S$. Do it in $O(n)$ time. ([source](https://leetcode.com/problems/remove-outermost-parentheses/))
```C
Sample Input:  "(()())(())"
Sample Output: "()()()"
Sample Input:  "(()())(())(()(()))"
Sample Output: "()()()()(())"
```
###### 3
Given a string containing the characters `+` and `*`, as well as single digit numbers from 0-9, calculate the value of the expression in the string, taking into account order of operations. Assume that the string has no whitespace. Do it in $O(n)$ time. You are forbidden from using python's `eval()` function, but using `int()` is allowed.
```C
Sample Input:  "6+3*2+4*3*2"
Sample Output: 36
```

- Challenge problem: solve the same problem, but where the characters `(` and `)` are also allowed, e.g. `"(1+3)*4"` -> `16`, and still only use $O(n)$ time.