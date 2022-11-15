/***********************************************************************
Write a recursive function that will find the best way to make change from a
given set of coin values for a given amount of money. The set of coin values
should default to using pennies (1 cent), nickels (5 cents), dimes (10 cents),
and quarters (25 cents). Return `null` if there are no possible ways to make
change for the given target amount.

Examples:

makeChange(21); // [1, 10, 10]
makeChange(75); // [25, 25, 25]
makeChange(33, [15, 3]); // [3, 15, 15]
makeChange(34, [15, 3]); // null
makeChange(24, [10, 7, 1]) // [7, 7, 10]

Here's a game plan for solving the problem:

First, write a 'greedy' version called `greedyMakeChange`:

Take as many of the biggest coin as possible and add them to your result.
Add to the result by recursively calling your method on the remaining amount,
leaving out the biggest coin, until the remainder is zero.
Once you have a working greedy version, talk with your partner about refactoring
this to `makeBetterChange`. What's wrong with `greedyMakeChange`?

Consider the case of `greedyMakeChange(24, [10,7,1])`. Because it takes as many
10 pieces as possible, `greedyMakeChange` misses the correct answer of
`[10,7,7]` (try it in node).

To `makeBetterChange`, we only take one coin at a time and never rule out
denominations that we've already used. This allows each coin to be available
each time we get a new remainder. By iterating over the denominations and
continuing to search for the best change, we assure that we test for
'non-greedy' uses of each denomination.

Discuss the following game plan and then work together to implement your
new method:

- Iterate over each coin.
- Grab only one of that one coin and recursively call `makeBetterChange` on the
  remainder using coins less than or equal to the current coin.
- Add the single coin to the change returned by the recursive call. This will be
  a possible solution, but maybe not the best one.
- Keep track of the best solution and return it at the end.

N.B. Don't generate every possible permutation of coins and then compare them.
Remember that a permutation is not the same thing as a combination - we will
need to check every combination of coins that add up to our target, we just
don't want to check the same combination in different orders. If you get stuck
you can start by writing a solution that calculates and compares all of the
permutations without storing them in an array. Then go back and refactor your
solution so that it only calculates and compares all of the different
combinations.

***********************************************************************/

function makeBetterChange(target, coins = [25, 10, 5, 1]) {

  if (target === 0) return [];
  if (!coins.some(coin => coin <= target)) return null;

  let bestChange = null;

  coins.forEach((coin, i) => {
    if (coin > target) return; // if coin is not bigger than target continue
    debugger

    let remainder = target - coin;
    let bestRemainder = makeBetterChange(remainder, coins.slice(i));
    if (bestRemainder === null) return;
    const currChange = [coin, ...bestRemainder];
    if (bestChange === null || currChange.length < bestChange.length) {
      bestChange = currChange;
    }
  });
  return bestChange;

//--------

// if (target === 0) return [];
// if (!coins.some(coin => coin <= target)) return null;

// let bestChange = null;

// for (let i = 0; i < coins.length; i++) {
//   if (coins[i] > target) continue;

//   let remainder = target - coins[i];
//   let bestRemainder = makeBetterChange(remainder, coins.slice(i));

//   if (bestRemainder === null) continue;
//   const currChange = [coins[i],...bestRemainder];
//   if (bestChange === null || currChange.length < bestChange.length) {
//     bestChange = currChange
//   }
//   return bestChange
// }

//-----------

  // let res = [];

  // function reduced(target, coins) {

  //   if (target === 0) return res;
  //   if (coins.length === 0) {
  //     res = null;
  //     return res;
  //   }
  //   debugger
  //   let currCoin = coins[0]

  //   if (target >= currCoin) {
  //     res.unshift(currCoin);
  //     return reduced(target - currCoin, coins);
  //     } else {
  //     return reduced(target, coins.slice(1));
  //   }
  // }

  // reduced(target, coins);
  // return res
}

console.log(makeBetterChange(21)); // [1, 10, 10]
console.log(makeBetterChange(75)); // [25, 25, 25]
console.log(makeBetterChange(33, [15, 3])); // [3, 15, 15]
console.log(makeBetterChange(34, [15, 3])); // null
console.log(makeBetterChange(24, [10, 7, 1])) // [7, 7, 10]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeBetterChange
} catch (e) {
  module.exports = null;
}
