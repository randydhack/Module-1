/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {
  let res; // this is an undefined data type, can be string. boolean, or int

  for (let i = 0; i < n; i++) { // loops through n amoutn time
    val = cb(val);  // cb the value and overwrite the curr val
    res = val; // res value is replaced with an updated value every time the loop increments
  }
  return res; // return the final result
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch (e) {
  return null;
}
