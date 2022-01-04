# Problem Decomposition
- Given a matrix of integers
- The integers represent a height map of the floor of nearby caves
- Smoke flows to the lowest point of the area it's in
- Write a function that finds the low points
  - Locations that are lower than any of its adjacent locations
  - Up, down, left, and right, but not diagonal
  - Corners and edges do not pad
- The risk level of a low point is its height + 1
- Your puzzle solution is the SUM 

## IOCE
Input: a list of strings of single-digit integers (a matrix)
Output: the sum of the risk levels of the low points of the matrix
Constraints: Do not consider neighbors that are undefined
Edge cases: 

# Approach
- Iterate over the input
- For each cell `matrix[row][col]`, check the values of the following neighboring cells
  - `[row+1][col]`
  - `[row-1][col]`
  - `[row][col+1]`
  - `[row][col-1]`
- For each of these neighbors, if it is not undefined, check if the current cell is strictly lower than it
- Note that we get a runtime error if we try to use col index on an undefined row
- If all neighbors are strictly greater than the current cell, add the current cell's value + 1 to the risk level sum
- Return risk level sum after iterating over the full input