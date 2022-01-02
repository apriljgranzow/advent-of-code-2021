# Problem Decomposition
- Given a list of integers
- The integers represent positions in a line
- We want to move all the points on top of each other with the least number of steps
- In other words,
  - what integer has the minimum combined "distances" between it and all the other points on the array

# Approach
## Brute force solution
- find the minimum and maximum of the input list
- create a map with a count of each int value in the array
  - thus we don't have to iterate over the whole array each time we calculate combined distance from another value
- create a Map to store the combined distances for each point
- return the KEY that corresponds to the minimum VALUE