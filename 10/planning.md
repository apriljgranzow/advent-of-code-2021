# Problem Decomposition
- Navigation subsystem syntax is made of several lines containing chunks
- There are 1 or more chunks per line
- Chunks may contain 0 or more other chunks
- Chunks must open and close with one of 4 legal pairs of matching characters
  - ()
  - []
  - {}
  - <>
- Some lines are incomplete, others are corrupted
- Find the corrupted lines first
- A corrupted line is one where a chunk closes with the wrong character
- Write a function that:
  - finds the first illegal character on each line
  - and convert it to a score based on the following table
  - sum these scores and return the total
## Syntax Error Score Points
| Symbol | Score |
| -- | -- |
| ) | 3 |
| ] | 57 |
| } | 1197 |
| > | 25137 |

## IOCE
Input: a list of strings consisting of paired brackets, some incomplete and some "corrupted"
Output: An integer representing the total "error score" of the first illegal character of each line, summed over all lines
Constraints: Not all lines will have a corruption error
Edge cases:


# Procedure
- Initialize 
- Each line is a contained environment, so we will iterate over line strings
- For each line, we will iterate over the individual characters
- All opening brackets get pushed to the stack
- As soon as we hit a closing bracket,
  - pop a character off the stack
  - check if the opening character matches the closing character
    - if yes, move on
    - if no, look up the _closing character_ on the _score table_ and increment the total score accordingly