### Stuyvesant Competitive Coding Club: Recommended Topics (Advanced Section)

The USACO training website contains a list of topics they think are important. This list is partially based on that one. This list is arranged in roughly increasing order of difficulty, though there will inevitably be some disagreement on this front.

Please note that understanding everything on this list isn't a free pass to becoming an expert at competitive programming. Each of these sections is a complex and nuanced field of potential problems. During a club meeting, we can only really dip our toes in the water of what these problems are like and how to solve them.

### Basic topics (should be mostly review):

- Simple data structures:
	- Arrays (tuples in Python) (static size)
	- Python lists / Java ArrayLists / c++ vectors (dynamic size)
	- Linked lists

- Simple algorithms (covered in APCS):
	- Binary search
	- Sorting algorithms (most languages provide them for you, so you just need to know how to use them)
	- Basically anything that's easy to learn from Wikipedia in a few minutes

- Big O notation
	- APCS students may only be familiar with basic big O, like O(1) and O(n). Everyone should become familiar with determining big O complexity in all scenarios
	- People should also understand space complexity (not just time complexity).

### More topics:

- Greedy Algorithms
	- Most importantly, when to use them. It's an easy trap to think a problem is solvable greedily, when it gives you the wrong answer.

- Graph Theory (very important)
	- Vertices / Nodes, Edges, Weights, basically understanding what a graph is
	- Cycles, Cyclic Graphs vs. Trees
	- Directed vs. Undirected Graphs
	- Special trees, e.g. binary trees

- Recursive Search Algorithms
	- This is covered in APCS (at least for some teachers)
	- Breadth-first vs. Depth-first
	- Pruning
	- Iterative Deepening

- Dynamic Programming (very important)
	- Recursive search, but with overlap amongst sub-problems
	- How to generate a unique characterization of each sub-problem, as well as a relationship between sub-problems.
	- Memoization vs. bottom-up techniques
	- Highly recommended: watch MIT OpenCourseWare 6.006, videos 19 through 22. (about 4 hrs of content)

- Divide-and-Conquer Algorithms
	- Splitting a problem into much smaller subproblems

- Simple Graph Algorithms
	- Flood Fill

- More Data Structures
	- Stacks, Queues
	- Heaps, Priority Queues
	- Tries

### Advanced Topics:

- Shortest Path Algorithms
	- Dijkstra's Algorithm
	- A* Search
	- Bellman-Ford
	- Floyd-Warshall

- Minimum Spanning Trees
	- Prim's Algorithm

- Knapsack problems
	- Continuous and discrete variations
	- Multiple knapsack versions

- Eulerian Tours
	- Cycle finding algorithm

- Network Flow
	- Ford-Fulkerson Algorithm
	- Min Cut Max Flow Theorem
	- Applications (there are many)

- Computational Geometry
	- Easily the most annoying topic on the list, not fun at all
	- Convex Hulls

- Palindromic Substrings
	- For some reason, this comes up in competitions a LOT, which is why it's on the list.
	- Manacher's Algorithm (difficult!)

- Optimized Search
	- Understanding how and where to prune recursive search
	- Probably the most difficult topic on the list. Can range from trivial to mind-bogglingly difficult.

### Auxiliary Topics (practical as opposed to theoretical):

These can and should be researched on your own time. Nothing in this section is especially difficult.

- c++
	- This is the unofficial language of competitive programming. Highly recommended for anyone who wants to compete past USACO bronze.
	- If you know Java (from APCS), you already know most c++ syntax.
	- You really don't need to know classes and templates and stuff for competitive programming.

- c++ STL Headers
	- fstream, iostream, cmath, cassert, algorithm (only the most important ones)

- c++ STL Containers
	- vector, deque, unordered_map, map, unordered_set, set, list, priority_queue, pair

- Bitwise Optimizations
	- Bitwise operators (|, &, <<, >>, etc.)
	- Using integral types to store states (e.g. storing several small integers in a single unsigned int or ULL)
	- Representing a state as a hashable data type (with strategy in previous point, or with a string)