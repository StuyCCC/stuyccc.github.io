### Recommended Topics (Advanced Section)
##### Stuyvesant Competitive Coding Club

The [USACO training website](https://train.usaco.org/usacogate) contains a list of topics they think are important. This list is partially based on that one. This list is arranged in roughly increasing order of difficulty, though there will inevitably be some disagreement on this front.

Please note that understanding everything on this list isn't a free pass to becoming an expert at competitive programming. Each of these sections is a complex and nuanced field of potential problems. During a club meeting, we can only really dip our toes into the water of what these problems are like and how to solve them.

##### Basic topics (should be mostly review):

- Simple Data Structures:
	- Arrays (static size)
	- Python lists / Java ArrayLists / c++ vectors (dynamic size)
	- [Linked lists](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html) (not that important)
	- [Stacks](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)), [Queues](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))
	- [Hash Maps](https://en.wikipedia.org/wiki/Hash_table), (Hash Sets)

- Simple Algorithms (covered in APCS):
	- Binary search
	- Sorting algorithms (most languages provide them for you, so you just need to know how to use them.)
	- Basically anything that's easy to learn from Wikipedia in a few minutes

- [Computational Complexity](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Algorithmic%20Complexity/complexity.html)
	- APCS students may only be familiar with basic big $O$, like $O(1)$ and $O(n)$. Everyone should become familiar with determining big $O$ complexity in all scenarios.
	- People should also understand space complexity (not just time complexity).

##### More topics:

- Greedy Algorithms
	- Most importantly, when to use them. It's an easy trap to think a problem is solvable greedily, when it gives you the wrong answer.

- Graph Theory (very important)
	- Vertices / Nodes, Edges, basically understanding what a graph is
	- Cycles, Cyclic Graphs vs. Trees
	- Directed vs. Undirected Graphs
	- Weighted vs. Unweighted Graphs
	- Special trees, e.g. binary trees

- Graph Representations
	- Adjacency Matrices
	- Adjacency Lists
	- Edge Lists
	- Conversion between types

- Simple Graph Algorithms
	- [Flood Fill](https://en.wikipedia.org/wiki/Flood_fill)
	- [Breadth-first Search](https://en.wikipedia.org/wiki/Breadth-first_search)
	- Shortest Paths on an unweighted graph

- Simple Recursive Search Algorithms
	- This is covered in APCS (at least for some teachers)
	- Modeling state-space searches as directed graphs
	- Pruning
	- [Iterative Deepening](https://en.wikipedia.org/wiki/Iterative_deepening_depth-first_search)

- Dynamic Programming (very important)
	- Recursive search, but with overlap amongst sub-problems
	- How to generate a unique characterization of each sub-problem, as well as a relationship between sub-problems.
	- [Memoization](https://en.wikipedia.org/wiki/Memoization) vs. bottom-up techniques
	- Recommended: MIT OpenCourseWare 6.006, [lectures 19 through 22](https://www.youtube.com/watch?v=OQ5jsbhAv_M&list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&index=19). (about 4 hrs of content)

- Divide-and-Conquer Algorithms
	- Splitting a problem into much smaller subproblems

##### Advanced Topics:

- More Data Structures
	- [Heaps](https://en.wikipedia.org/wiki/Heap_(data_structure)), Priority Queues
	- [Tries](https://en.wikipedia.org/wiki/Trie)
	- [Quad Trees](https://en.wikipedia.org/wiki/Quadtree)

- Sliding Window Algorithms
	- Rolling Hashes

- Shortest Path Algorithms
	- [Dijkstra's Algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
	- [A* Search](https://en.wikipedia.org/wiki/A*_search_algorithm)
	- [Bellman-Ford Algorithm](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
	- [Floyd-Warshall Algorithm](https://en.wikipedia.org/wiki/Floyd%E2%80%93Warshall_algorithm)

- Minimum Spanning Trees
	- [Prim's Algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
	- [Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)

- Cycle Detection
	- [Eulerian Tours](https://www.algorithmist.com/index.php/Euler_tour)
	- Minimal Weight Cycles

- Network Flow
	- [Ford-Fulkerson Algorithm](https://en.wikipedia.org/wiki/Ford%E2%80%93Fulkerson_algorithm)
	- Min Cut Max Flow Theorem
	- Applications (there are many)

- [Knapsack problems](https://en.wikipedia.org/wiki/Knapsack_problem)
	- Continuous and discrete variations
	- Multiple knapsack versions

- Subsequence-based Things
	- [Range Trees](https://en.wikipedia.org/wiki/Range_tree)
	- [Segment Trees](https://en.wikipedia.org/wiki/Segment_tree)
	- [Fenwick Trees](https://en.wikipedia.org/wiki/Fenwick_tree)
	- [Range Minimum Query Algorithms](https://www.geeksforgeeks.org/range-minimum-query-for-static-array/)

- More Graph Theory
	- [Topological Sort](https://en.wikipedia.org/wiki/Topological_sorting)
	- [Union-Find](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
	- Euler Walks
	- [Least Common Ancestor Algorithms](https://www.geeksforgeeks.org/lca-n-ary-tree-constant-query-o1/)

- Computational Geometry
	- [Convex Hulls](https://en.wikipedia.org/wiki/Convex_hull)
	- [Sweep Line Algorithms](https://en.wikipedia.org/wiki/Sweep_line_algorithm)

- Optimized Search
	- Understanding how and where to prune recursive search
	- [Branch and Bound](https://en.wikipedia.org/wiki/Branch_and_bound)

##### Auxiliary Topics (practical as opposed to theoretical):

These can and should be researched on your own time. Nothing in this section is especially difficult.

- Bitwise Operations
	- AND, OR, XOR
	- Commutativity and Associativity

- C++
	- This is the unofficial language of competitive programming. Highly recommended for anyone who wants to compete past USACO bronze.
	- If you know Java (from APCS), you already know most C++ syntax.
	- You really don't need to know classes and templates and stuff for competitive programming.

- C++ [STL Headers](https://en.cppreference.com/w/cpp/header)
	- fstream, iostream, cmath, cassert, algorithm (only the most important ones)

- C++ [STL Containers](http://www.cplusplus.com/reference/stl/)
	- vector, deque, unordered_map, map, unordered_set, set, list, priority_queue, pair

- Bitwise Optimizations
	- [Bitwise operators](https://en.cppreference.com/w/cpp/language/operator_arithmetic) (|, &, ^, <<, >>, etc.)
	- Using integral types to store states (e.g. storing several small integers in a single unsigned int or ULL)
	- Representing a state as a hashable data type (with strategy in previous point, or with a string)