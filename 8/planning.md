# Problem Decomposition
- Given 2 inputs consisting of 1 "entry":
  - an array of 10 unique "signal patterns"
  - a four digit output value
- Signal patterns correspond to different ways the submarine tries to render a digit
- Within an entry, the same wire/segment connections are used
- Because 7 is the only digit that uses three segments
- `dab` means that to render a 7
  - signal lines `d`, `a`, and `b` are on.
- 4 digits have a unique number of segments
  - 1, 4, 7, and 8
- For each entry, decode the patterns for each of the unique segments and then count the number of times these digits occur in the output value

## IOCE
### Input:
#### Signal patterns
- 10 strings
- each string contains some combination of the letters a through g
- individual characters will not be repeated
- order does not seem to matter
#### Output value
- 4 strings
### Output:
An integer representing the number of digits in the output value that decode to 1, 4, 7, or 8.
### Constraints
N/A
### Edge Cases:
??

# Approach
Digits can be depicted on a clock using different numbers of segments:
| Number of Segments | Number(s) |
| -- | -- |
| 2 | 1 |
| 3 | 7 |
| 4 | 4 |
| 5 | 2, 3, 5 |
| 6 | 6, 9 |
| 7 | 8 |

In the problem, each segment's position is labeled with a letter `a` through `g`.
The strings given as input represent a set of segments that are enabled to transmit that particular digit.
Strings with 2, 3, 4, or 7 characters only have one possible way to be decoded.
Figure out what those combinations are:
- Create a map of segment counts to arrays of signal patterns
Examine the output string and count the strings with lengths 2, 3, 4, or 7.

Note: for part 1 we only care about unique lengths, so we don't even need to look at the characters that make up the different digits.  Just look at the output string.

# Part 2:
For each entry, determine all of the wire/segment connections and decode the four-digit output values. What do you get if you add up all of the output values?