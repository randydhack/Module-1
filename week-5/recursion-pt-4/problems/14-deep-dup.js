/***********************************************************************
A shallow copy makes a copy of the reference to X (an array), into Y.
If we were to say something like this for example:
let x = [ [1], [2, 3] ];
let y = [ [1], [2, 3] ];

let deep = [[1], [2, 3] ];

In this situation, Y, is a shallow copy of X. Here both X's and Y's VALUES point to the
same place in memory. But hold on you might say, "I just checked y === x is false", while
that is true, what if I told you that x[0] === y[0] is true? Both x[0] and y[0] evaluate to [1] AND
they also share the same memory address that gives us an array of just the number 1 inside.
So for the sake of testing that our addresses are different we will use nested arrays in our
examples to know if our deep duplication has succeeded. You might have already guessed that
since we used 'slice' in the example above that 'slice' creates a shallow copy, and you are
correct. For this problem we duplicate our original array so that our function returns a new
array with different memory addresses.

Write a function, deepDup(arr), that deeply duplicates a given array. Your duplicated array,
when compared to various indexes of the original array, should evaluate to false like below.

Examples:

let arr = [[1], [2, [3]]];
duped = deepDup(arr); // [[1], [2, [3]]]
arr[0] === duped[0] // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false

Note:
if you compare a 1 dimensional array of numbers like below,
you will get 'true' because we are comparing numbers.
let x = [1, 2, 3];
let y = x.slice();
console.log(x[0] === y[0]) // true
***********************************************************************/

function deepDup(arr) {

  if (!Array.isArray(arr)) {
    return arr;
  }

  let deepCopy = [];

  for (key in arr) {
    let value = arr[key];
    deepCopy[key] = deepDup(value)
  }
  console.log(deepCopy)
  return deepCopy;

}

// let arr = [[1], [2, [3]]];
// duped = deepDup(arr); // [[1], [2, [3]]]
// console.log(arr[0] === duped[0]) // false
// console.log(arr[1] === duped[1])// false
// console.log(arr[1][1] === duped[1][1])// false

/*
Base Case - If array is not an object, return arr.
Recursive Case - For in loop for iteration
Recursive Step - Value of current element from arr[key]

-------------------------------------------------------------------------------------

1. Check if Array is an Object.
2. If true, move down. If false, return arr.
3. Create a deep copy of the array if it is an array, else create an object.
    - By declare a variable and using a condition with Array.isArray()
      - If the result of the parameter is an Array, create an empty Array.
        - Else, create an object.
4. Use a for...in loop. (For...in loop can be used for objects and arrays);
    - For Arrays, key return the index and value returns the element.
      For example, ['apple', 'pie'] -> Key = 0, Array[key] = 'apple'
    - Object is self explanatory.
5. Create a variable to store the array's value. -> arr[key];
6. Call the recursive function with containing value.
    - Have that be stored inside deepCopy like how you would if it was an object.
      deepCopy[key] = value, but instead it will be ---> deepCopy[key] = deepDup(value).
7. It will loop until the value is a primitive type. It will do this for each element.
8. Return deepCopy at end of the function.

-------------------------------------------------------------------------------------

Array:  [ [ 1 ], [ 2, [ 3 ] ] ]
deepCopy:  []
Value:  [ 1 ]
Array:  [ 1 ]
deepCopy:  []
Value:  1
Value:  [ 2, [ 3 ] ]
Array:  [ 2, [ 3 ] ]
deepCopy:  []
Value:  2
Value:  [ 3 ]
Array:  [ 3 ]
deepCopy:  []
Value:  3

Results -
false
false
false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
