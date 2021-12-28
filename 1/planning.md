# Part 1
## Problem Decomposition
- Given a  list of integers representing measures of sea floor depth.
- The measurements are ordered increasingly outward from the submarine.
- Write a function that calculates the rate that the depth increases
- COUNT:
  - the number of times
    - a depth measurement
    - INCREASES
    - FROM
    - the previous measurement
    - there is no measurement before the first measurement

## Example
```
199 (N/A - no previous measurement)
200 (increased)
208 (increased)
210 (increased)
200 (decreased)
207 (increased)
240 (increased)
269 (increased)
260 (decreased)
263 (increased)
```
Result: 7 increases

# Part 2
- Consider sums of a three-measurement sliding window
```
199  A
200  A B
208  A B C
210    B C D
200  E   C D
207  E F   D
240  E F G
269    F G H
260      G H
263        H
```
- Take the sum of each window and count whether it increased from the last window
- Stop when there aren't enough measurements left to create a new sum