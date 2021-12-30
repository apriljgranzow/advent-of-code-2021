# Problem Decomposition
- Given a list of line segments
  - represented as pairs of x,y coordinate tuples
- Consider only the vertical and horizontal lines
  - either x1 = x2 or y1 = y2
- Determine the NUMBER of points where
  - at least two lines overlap

## IOCE
Input: an array of nested 2-tuples of 2-tuples with integers
Output: an integer
Constraints: Ignore diagonal lines
Edge cases: If line segment starts and ends on the same point, count it as 1 square

# Text Processing
- `String.prototype.matchAll()` takes a `regexp` and returns an iterator of all results matching the string against the regular expression.
  - Includes capturing groups
  - Need to add g flag to expression
  - `(\d+),(\d+) -> (\d+),(\d+)`
- Could also just split on '->' and then split on comma

# Approach
- Create a map that tracks all the covered cells on the grid
  - We don't know the size of the grid until we've processed all of the inputs
  - Thus a matrix would not work elegantly here
- Iterate over the list of inputs
- Check if a line is horizontal or vertical
  - If yes to one or the other
    - add all of the line's points to the map
      - if point does not exist, set it to 1
      - otherwise get the existing count and set the point's value to count + 1

# Part 2
- Additionally consider diagonal lines
- diagonals will always be 45 degrees
  - 1,1 -> 3,3 covers 1,1, 2,2, and 3,3
- We need to handle major and minor diagonals
  - Major diagonals increase x and y
  - Minor diagonals increase x and decrease Y