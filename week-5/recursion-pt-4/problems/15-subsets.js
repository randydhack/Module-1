/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  debugger

  if (arr.length === 0) return [[]]; // base

  let lastEl = arr.slice(arr.length - 1)
  let rest = subsets(arr.slice(0, -1))

  return rest.concat(rest.map(e => e.concat(lastEl)));

}

// console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]


/*

1. Base case will be when array's length reaches 0;
2. Remove the last element from the array using slice so save the value for later
3. Create a variable called prev that calls the function with the sliced array without the last element.
  - Do thid until no more elements are left.
4. return the element in the order of subset.
  - Prev...(prev.map x -> x.concat(el));

-----------------------------------------------------------------------------------------------------------
The Process:

Case 1: [[]] --> Checks if length is 0. Returns [[]]
1. Array:  []
   Length of Array:  0
   Result: [[]]

******************* Case 2 Process will be the same for each Case ****************************************

Case 2: [[1]] --> Checks if length is 0. Not true.
  - Store a copy of the last element of the array which is [1].
  - Remove the last element by slicing from index 0 to -1. ---> [[1]] becomes [];
  - Array.length is now 0. Return [[]].
  - Return the subsets in it's final form. ---> [[], [1]]

1. Array:  [ 1 ]
   Length of Array:  1
   Element:  [ 1 ]

2. Array:  []
   Length of Array:  0
   Previous:  [ [] ]

   Result:  [ [], [ 1 ] ]

Case 3:
1. Array:  [ 1, 2 ]
   Length of Array:  2
   Element:  [ 2 ]

2. Array:  [ 1 ]
   Length of Array:  1
   Element:  [ 1 ]

3. Array:  []
   Length of Array:  0

  Previous:  [ [] ]
  Result:  [ [], [ 1 ] ]

  Previous:  [ [], [ 1 ] ]
  Result:  [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]

Case 4:
1.  Array:  [ 1, 2, 3 ]
    Length of Array:  3
    Element:  [ 3 ]

2.  Array:  [ 1, 2 ]
    Length of Array:  2
    Element:  [ 2 ]

3.  Array:  [ 1 ]
    Length of Array:  1
    Element:  [ 1 ]

4.  Array:  []
    Length of Array:  0

  Previous:  [ [] ]
  Result:  [ [], [ 1 ] ]

  Previous:  [ [], [ 1 ] ]
  Result:  [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]

  Previous:  [ [], [ 1 ], [ 2 ], [ 1, 2 ] ]
  Result:  [ [], [ 1 ], [ 2 ], [ 1, 2 ], [ 3 ], [ 1, 3 ], [ 2, 3 ], [ 1, 2, 3 ]
]
*/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
