# Problem Decomposition
- Given a list of integers
- Each integer represents a timer
- Each turn the timers tick down by 1
- When a timer hits 0, it creates a new timer
  - the new timer starts at 8
  - the old timer resets to 6
- return the length of the list after 80 turns

## IOCE
Input: a list of integers
Output: a single integer
Constraints: 
Edge cases

# Approach
- Use a loop to count up to 80
- in each loop
  - create an integer to track the # of new fish that will be added, so we don't modify the array until the loop is completed
  - for each integer
    - if n = 0
      - increase new fish counter
      - change n to 6
    - otherwise decrement n by 1
  - push 8s to the array based on the number of new fish that were born this turn

# Part 2
- Increasing the number of turns makes mutating the array unfeasible due to the exponential growth
- We can replace this with a Map
## Procedure
- Initialize timer counter map
  - keys = integer value of timer
  - value = integer number of timers that have that value
- Go through the initial input and add all the timers to the map
### Simulating turns
- Iterate over each key
- For keys 1 thru 8, swap their values down
- For key 0, add its value to both 6 and 8