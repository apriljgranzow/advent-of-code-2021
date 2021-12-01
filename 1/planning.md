# Problem Decomposition
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

# Example
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