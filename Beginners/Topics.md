### Recommended Topics (Beginner Section)
##### Stuyvesant Competitive Coding Club

This is a list of recommended topics for the beginner section.

#### Procedural Programming in Python

- Simple Data Types
	- integer ("int")
	- string ("str")
	- decimal number ("float")
	- boolean ("bool")
	- None

- Simple Operators
	- arithmetic: +, -, \*, /, %, //, \*\*
	- comparison: >, <, <=, >=, ==, !=
	- logical: and, or, not
	- order of operations
	- what does each operator take in, and what does it return? (sometimes the returned value depends on what was put in!)

- Expressions with many operators
	- can we write some simple expressions, and predict what they will output?

- Variables
	- assignments
	- augmented assignments (+=, -=, etc.) (perhaps best to teach this along with member functions)

- Simple Linear Data Structures
	- tuples, lists, (and strings)
	- a new "operator": indexing!
	- slicing

- Built-in Functions
	- value-returning: str, int, abs, len, min, max, sum, all, any, range, ord, chr
	- I/O: print, input, raw_input

- Control Flow
	- "in" operator
	- if, elif, else
	- while, for
	- continue, break

- Member Functions
	- list: append, insert, pop, sort, index
	- string: split, strip, isalpha, isdigit, isalnum, index, replace, lower, upper

- More I/O
	- files: open, read, readline, readlines, write, close

- More Data Structures
	- set: add, remove
	- dict: new "indexing", literals

- Functions
	- start with functions that don't return anything
	- note similarity in calling functions we already know how to use, like len, range, etc.
	- parameters and return values

- Higher Dimensional Arrays
	- nested lists in Python
	- looping over higher dimensional arrays
	- rectangular vs. jagged arrays

- Simple Classes (not important, save for later)
	- methods, member variables
	- self
	- special methods: \_\_init\_\_, \_\_str\_\_

#### Intro to Competitive Programming

- Typical Problem Structure
	- in-file and out-file
	- practice reading different data types from formatted files
		- note that this is kind of tedious in Python, so understanding it is important

- Program Efficiency and Speed
	- limitations of the machine (about 10,000,000 computations per second)
	- problem input constraints

- Run Time Complexity
	- introductory example: binary search
	- big-O notation
	- using big-O to estimate whether your code will pass the time constraints
	- review some of the most common big-O categories
	- if neccessary, logarithms

#### General Problem Solving Techniques

- Recursion
	- subproblem structure: expressing the answers to problems in terms of the same problem
	- local vs. global memory

- Exhaustive Search
	- given a set of possible states and a goal state, check every possible state (recursion typically applies)

- Incremental Approach
	- given a problem of size $N$, solve it for size $N-1$ (think: mathematical induction)