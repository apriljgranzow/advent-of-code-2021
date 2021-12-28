# Part 1
## Problem Decomposition
- Given a report consisting of a list of binary numbers
- Decode them to find various diagnostics
### Power Consumption
- Write a function that finds the power consumption of the submarine
- Use the list of binary numbers to generate 2 new numbers:
  - gamma rate
  - epsilon rate
- return the gamma rate multiplied by the epsilon rate
#### Gamma Rate
- Find the most common bits in the in the corresponding positions of all numbers
- Given the example input,
  - considering the first bit of each number
  - there are five 0s and seven 1s.
  - thus the first bit of the gamma rate is 1
#### Epsilon Rate
- Like gamma, but
- the LEAST common bit from each position is used

## IOCE
- Input: a list of binary numbers
- Output: a single integer
- Constraints: N/A
- Edge cases:
  - equal number of each in a position?
  - Assuming all the strings in the list will be the same length

## Approach
- Find the gamma rate by checking each index and tallying counts of the 1s and 0s, returning whichever is higher for the given index
- Once we have our gamma rate, we can flip the digits
  - Because there are only 2 options, if it's not the most, it's the least
- Take the gamma rate and epsilon rate and convert them to base 10 integers using `parseInt`
- multiply them together
⚠️ Note that `parseInt` takes the base you are converting FROM and always changes it to decimal.