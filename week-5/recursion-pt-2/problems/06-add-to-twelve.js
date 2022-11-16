/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/


function addToTwelve(arr) {

  if (arr[0] + arr[1] === 12) return true;

  if (arr.length === 0) return false;

  return addToTwelve(arr.slice(1))
}

// addToTwelve([1, 3, 4, 7, 5]); // true

/*
Base Case: when current + next index equals to 12
Base Case 2 : if array length is less than 1 return false
Recursive Step: remove the first element from array and return the function containing the array.

------------------------------------------------------------------------------------------

1. [1, 3, 4, 7, 5] ---> 1 + 3 !== 12, remove [1] and return  [3, 4, 7, 5]
2. [3, 4, 7, 5] ---> 3 + 4 !== 12, remove [3] and return [4, 7, 5]
3. [4, 7, 5] ---> 4 + 7 !=== 12, remove [4] and return [7, 5]
4. [7, 5] ---> 7 + 5 === 12, return true.
This return true because 7 + 5 equals to 12.

If nothing matches and the array reaches to length of 1, return false.

*/

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
