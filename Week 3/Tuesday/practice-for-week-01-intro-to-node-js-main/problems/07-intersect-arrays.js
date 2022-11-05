/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) {
  // Your code here

  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let curr = arr1[i];


    for (let j = 0; j < arr2.length; j++) {
      let next = arr2[j]

      if (curr === next) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = intersect;
