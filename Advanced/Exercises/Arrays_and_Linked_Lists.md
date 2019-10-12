### Arrays and Linked Lists

The three basic types of linear data we're going to use are Arrays, Dynamic Arrays, and Linked Lists.

##### Suggested Reading:

- Wikipedia: [Dynamic Arrays](https://en.wikipedia.org/wiki/Dynamic_array)

	- Lists in python, ArrayLists in Java, and vectors in C++ are dynamic arrays.

- Wikipedia: [Linked Lists](https://en.wikipedia.org/wiki/Linked_list)

	- This is the most rarely used of the three, but still useful to know.

- Geeks for Geeks: [Linked Lists vs. Arrays](https://www.geeksforgeeks.org/linked-list-vs-array/)

##### Notes

Time complexities of common operations on Dynamic Arrays and Linked Lists:

|                                                       | Dynamic Array (length m)                                                          | Linked List (length m)                                                                                                                                               |
|-------------------------------------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Access by index n                                     | **O(1)**                                                                          | Go through each element until you reach the nth **O(n)**                                                                                                             |
| Access by value v                                     | Loop through array until you reach the value **O(m)**                             | Loop through list until you reach the value **O(m)**                                                                                                                 |
| Set value at index n to value v                       | **O(1)**                                                                          | Go to the nth element, set its data value to v **O(n)**                                                                                                              |
| Insert value (0, m-1)                                 | Shift elements n-(m-1) **O(m-n)** (1 is a constant, doesn’t matter)               | Insert a value between the n-1th & n+1th elements **O(n)**                                                                                                           |
| Insert value at back                                  | No shifting elements **O(1)**                                                     | Have to go through whole list **O(m)**, (n ≈ m in this case)                                                                                                         |
| Insert value at front                                 | Shift all elements **O(m)**                                                       | Make the new element the head of the list **O(1)**                                                                                                                   |
| Remove first element                                  | Shift all elements **O(m)**                                                       | Destroy link from head to next element, make the next element the head **O(1)**                                                                                      |
| Remove index n                                        | Shift elements n-m **O(m-n)**                                                     | Reach element n, then remove link to next element and replace with link between n-1th & n+1th elements **O(n)**                                                      |
| Remove by value                                       | Shift all elements **O(m)**                                                       | Search for value **O(m)**                                                                                                                                            |
| Split into two lists at index n                       | Create two arrays, copy elements over **O(m)**                                    | Go to nth element, separate the two adjacent elements, set the first element of the second list as head and add a link to null at the end of the first list **O(n)** |
| Join two lists, one of length m1 and one of length m2 | Create an array of length m1 + m2, copy elements over from each list **O(m1+m2)** | Move to the last element of the first list, then link the last element to the head of the next list **O(m1)**                                                        |