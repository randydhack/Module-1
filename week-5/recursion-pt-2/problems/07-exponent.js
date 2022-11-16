/***********************************************************************
Write a recursive function called `exponent` that takes two integers,
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/

function exponent(num, power) {

    if (power === 1) return num;
    debugger
    if (power <= 1) {
    return (1/num) * exponent(num, power + 1);
    } else {
        return num * exponent(num, power - 1);
    }
}
console.log(exponent(3, 2)); // 9
console.log(exponent(2, -2)); // 1/4 (or 0.25)
console.log(exponent(5, 5)); // 3125

/*
Base Case: When power === 1.
Recursive Case: If power is less than or greater than 0;
Recursive Step: If power is less than 0, return 1/num * num, power + 1
                Else return num * num,power - 1

-----------------------------------------------------------------------------------

1. (3, 2) ----> Checks if power === 1, if not skip and check the second condition.
2. Check IF power is less than or equal to 0 return that recursive step.
    - Else, return this recursive step.
3. Since 2 is greater than 0, skip for first condition and move to the else statement.
4. Return num * exponent(num, power - 1).
5. It will iterate until power === 1 and return num.

If power is negative then step (4) will be (1 / 4) * exponent(num, power + 1).

*/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
