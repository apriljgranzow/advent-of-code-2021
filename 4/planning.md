# Problem Decomposition
## Input
- Given a random set of Bingo boards
- and a random order to draw numbers
## Procedure
- calls numbers and marks them on all the boards
- continue calling numbers until one of the boards "wins"
- where "winning" is defined as having a full **row** or **column** (NOT diagonals) marked
### When a winning board is found
- Calculate the sum of all the unmarked numbers on the winning board
- Multiply this sum by the last number that was called when the board won.
## Solution input
Find the winning board and its "score"

# IOCE
## Input:
- The first line of the text file contains a comma-separated string of integers representing bingo numbers that will be called.
- The second line is an empty line, followed by the list of bingo cards/boards.
### Bingo cards
- Each card is a 5x5 matrix of integers
- Rows are separated by lines
- Elements are separated by spaces
- Cards are separated by empty lines
## Output:
- An integer representing the "score" of the winning board (see Problem Decomposition above)
## Constraints:
N/A
## Edge Cases:
- Assuming it's not possible for 2 boards to win at the same time
- Assuming cards cannot have duplicates

# Approach
## File processing
- First split by `\n\n`, this will separate numbers from cards
- Take the first index and split by commas to get the numbers to call
- The rest of the array will be strings representing boards
- Split board strings by `\n` and then map over the elements and split by spaces

## Finding the winning card
We need an easy way to get the unmarked numbers to calculate the score.
### BingoBoard class
#### Properties
  - numberMap converts numbers called to board positions
  - filledMap tracks how many squares have been filled in for each row and column
