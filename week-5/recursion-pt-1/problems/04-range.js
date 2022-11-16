/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end) {

  if (start >= end) { // if start is 8 and end is 6, return []. If start is 3 and end is 3 return [];
    return [] // if the end case is [1,2,3,4] and start is equal to end. 5 = 5 then return and empty array
  }

  return [start, ...range(start + 1, end)]
}
range(1, 5); // [1, 2, 3, 4]


/*
If start is greater than or equal to end, return [].
  - (8, 5) return [];
  - (5, 5) return [];
Else, continue until start reaches base case. ^

Start is 1, End is 5 --> (1,5)

1. [1] + range(1 + 1, 5)
2. [1, 2] + range(2 + 1, 5)
3. [1, 2, 3] + range(3 + 1, 5)
4. [1, 2, 3, 4] + range(4 + 1, 5)
5. [1, 2, 3, 4, []];

Result is [1, 2, 3, 4] because and empty [] does not mutate.


*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
