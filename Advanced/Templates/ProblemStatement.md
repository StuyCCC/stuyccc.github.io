<link rel="stylesheet" type="text/css" media="all" href="/Advanced/style.css" />
### Probability Permutations
##### Point Value: 33

You are given three probabilities, _P(A)_, _P(B)_, and _P(C)_. All three probabilities are rational numbers, and are given as a ratio of integers, _x/y_, where 0 < _x_ < _y_ < 1,000,000. It also happens that _P(C)_ can be expressed as some combination of _P(A)_ and _P(B)_, using operators called __and__ and __or__. _P(A and B)_ is the probability of both _A_ and _B_ happening.  When combining _A_ and _B_, all events are considered independent. This means that _P(A)_ != _P(A and A)_. Likewise, _P(A or B)_ is  the probability of either _A_ or _B_ happening. If multiple operators are used, they are always evaluated from left to right.

Your goal is to determine what operators to use on _A_ and _B_ to produce _P(C)_. There may be multiple solutions, in which case you should pick the solution with the fewest operators. If there are multiple solutions with the same amount of operators, any such solution will suffice.

##### Input Format

Three lines, containing _P(A)_, _P(B)_, and _P(C)_, respectively. Each line is a rational number formatted as _x/y_.

##### Sample Input

```
50/100
20/100
55/100
```

##### Output Format

A single line, formatted as appears in the sample output.

##### Sample Output

```
A and B or A
```