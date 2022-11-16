/*

Write a function `choosePrimes(nums)` that takes in an array of numbers as args.
The function should return a new array containing the primes from the original
array.

A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]

*/

let isPrime = function(num) {
    // Your code here

    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {

        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let choosePrimes = function(nums) {
    // Your code here

    return nums.filter(isPrime); // filter return the value isPrime and stores it until end of array's length
                                 // u dont have to create an empty arr variable to store incoming values then return it at end
                                 // filter does it all for you
}

// alternative solution using Array.filter
// let choosePrimes = function(nums) {
//     return nums.filter(isPrime);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = choosePrimes;
} catch (e) {
    module.exports = null;
}
