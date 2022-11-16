/*
Write a function `sumForEach(arr)` that accepts an array as an arg.
The function should return the total sum of all values in the array.

Solve this using Array's `forEach()` method.

Examples:

console.log(sumForEach([4, 3, -1, 10])); // 16
console.log(sumForEach([6, 7, 2])); // 15
console.log(sumForEach([])); // 0
*/

let sumForEach = function(arr) {
debugger
  // if (arr.length === 0) {
  //   return 0;
  // }
  // return arr[0] + sumForEach(arr.slice(1));

  let sum = 0;

  arr.forEach(e => sum += e)

  return sum
};

console.log(console.log(sumForEach([4, 3, -1, 10]))); // 16)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumForEach;
} catch (e) {
  module.exports = null;
}
