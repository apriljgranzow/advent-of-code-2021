# Part 1
## Problem Decomposition
- The submarine can take a series of commands like:
  - forward 1
    - increases the horizontal position by 1 unit
  - down 2
    - increases the depth by X units
  - up 3
    - increases the depth by X units
- Your input is a list of these commands
- Horizontal position and depth both start at 0
- After reading all of the instructions,
- take the final depth and horizontal position and multiply them together

### IOCE
Input: a list of strings of format {command} {amount}
Output: the final vertical and horizontal distance measurements multiplied together
Constraints: None
Edge cases: is it possible to go up from 0?

# Approach
- Create 2 variables to represent vertical and horizontal position, initialized to 0 and 0.
- Iterate over the list of instructions
- For each instruction, check for which of the 3 directions and then adjust the variables accordingly

# Part 2