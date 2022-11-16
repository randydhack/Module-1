/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

function fibonacci(n) {

    if (n === 1) return 1
    if (n === 0) return n
    debugger
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(10)); // 55
/*

*****  Fibonacci always starts with 0 + 1 ******

1. Check if the n === 1, return 1. This will only occur once if the paramater take in 1.
2. Create a base case where n === 0.
3. Return fibonacci(n - 2) + fibonacci(n - 1) ---> if n is 10 fib(8) + fib(9) and repeat

*/
// console.log(fibonacci(1)); // 1
// console.log(fibonacci(2)); // 1
// console.log(fibonacci(3)); // 2
// console.log(fibonacci(4)); // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
