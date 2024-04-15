# Sort By Most Adjacent Consonants - PEDAC Process Notes

## Task 1 - Understand the Problem

Questions:

- Is `y` considered a consonant or not? It is still not clear from the tests, but going to assume that it is a consonant.
- Does punctuation and other non-space, non-alphabetical characters break a streak of consonants? Or only vowels break the streak? I assume anything except a space breaks the streak.
- Is the sort order ascending or descending? Descending order
- Does any number of consecutive whitespace characters count as a continuation of the adjacent consonant count? Or only a single space character? Assume only a single space character.
- Are empty strings treated the same as any string with 0 consonants, or how else to handle them? Assume that empty strings just the same as a string with 0 consonants.
- Does the first consonant found count as 1 adjacent consonant? Or does the first consonant found not count? The first consonant does not count.

Explicit Rules:

- Adjacent consonants are consonants that are either directly next to each other in the same word, or have a single space between them (i.e. continue counting adjacent consonants between words)
- The sorting algorithm should be stable, i.e. strings with the same number of max adjacent consonants should maintain their order.

Implicit Rules:

- Strings can contain multiple words.
- Words are any letters that are separated by a space.

## Task 2 - Examples and Test Cases

The test cases clarify the following:

## Task 3 - Data Structure

The input is an array. Other than that, nothing else. The algorithm will just iterate through the string and have some counter variables.

## Task 4 - Algorithm

Create a comparator function which can be used with the built-in sort method.
The function accepts 2 strings as arguments

declare 2 counter variables to track the maximum adjacent consonants in both strings
Iterate through every character of the first string:
  declare a counter variable to count the current number of adjacent consonants
  if the current character is a consonant:
    add 1 to the current count
  if the current character is a vowel (either `aeiou`) then:
    check if the current count is greater than the maximum count, then set the maximum count to the current count
    reset the current count to 0

Subtract 1 from the max count to offset counting the first consonant.
Check if the max count dropped to -1, if so, set it to 0. This can happen if there are no consonants at all in the string.

Iterate through the second string in the exact same way (have a helper function)

Once you have 2 max counts established:
  if count A > count B: return -1
  if count A < count B: return 1
  else return 0

Call `sort` on the array of strings, and pass in the comparator function as its callback

## Task 5 - Implement Solution / Code

See `sortMostAdjacentConsonants.js`
