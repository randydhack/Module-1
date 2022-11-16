/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
***********************************************************************/

function sumArray(arr) {
  //BASE CASE
  if (arr.length === 0) { // if length reaches 0, return
    return 0;
  }

  return arr[0] + sumArray(arr.slice(1)) //
}
/*
For [1,2,3] -

arr[0] + sumArray(arr.slice(1)) Does the below
1 + [2,3] --> 1 + 2 + [3] --> 1 + 2 + 3 + [] ===> 6

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = sumArray;
} catch (e) {
  module.exports = null;
}
