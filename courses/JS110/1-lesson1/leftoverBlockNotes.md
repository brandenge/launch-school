# Leftover Blocks - PEDAC Process Notes

## Task 1 - Understand the Problem

Questions:

- Are all the cubes the same size? Yes.
- What does it mean that a block in a lower layer can support more than one block in an upper layer? This means that blocks are layered in an offset pattern, i.e. blocks are not directly vertical of one another between layers.
- Can there be overhanging cubes in the structure? No.
- Is a structure of 1 block considered a valid structure? Yes.
- Can every layer besides the top layer have extra blocks that do not have any blocks that they support above it? No.

Explicit Rules:

- The input is an integer, representing a number of blocks.
- The output is an integer, representing the number of left over blocks after building the tallest possible valid structure with them, according to the rules for what defines a valid structure.
- Blocks are cubes, so they are 3-dimensional objects with every side the same length.
- The top-most layer is always just a single block.
- No gaps between blocks, i.e. all blocks are touching the nearest blocks next to them on each side.
- The structure is built in layers, i.e. horizontal rows of blocks

Implicit Rules:

- The structure is like a 3-dimensional pyramid with a square base, with each upper block centered between 4 blocks beneath it.
- Blocks in lower layers are required to have blocks above them that they support.

## Task 2 - Examples and Test Cases

Yes, the test cases clarify the following:

- That a structure of 1 block is valid
- That lower layers cannot have extra blocks added to them, so there can be leftover blocks.

## Task 3 - Data Structure

For this problem, I will just use math and a loop to keep track of the total number of blocks and layer number. So just integer primitives, no real data structures.

Note that we could use a two-dimensional array to represent the structure, with each inner array representing each layer / row in the structure, and the elements of the inner array could be any arbitrary value to represent a block. Note however, this could be a somewhat flawed representation of the structure, as the structure is 3-dimensional, and this array would only be 2-dimensional. A 3-dimensional array could also be used, but may just make things more confusing to think about.

## Task 4 - Algorithm

Create a variable called `layer` and set it to `1`. This represents the layer number, counting from the top-most layer first and going downward.

Create a generic while loop that runs while true
  declare a variable `layerBlocks` and set it to the value of `layer` to the power of 2 (i.e. squared).
  If `layerBlocks` is greater than the remaining number of blocks, return the remaining number of blocks.
  Decrement the number of blocks by `layerBlocks`
  Increment `layer` by 1

## Task 5 - Implement Solution / Code

See `leftoverBlocks.js`
