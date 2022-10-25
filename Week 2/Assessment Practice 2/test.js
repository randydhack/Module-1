// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5


function costOfGroceries(groceries) {

  let total = 0;

  for (let i = 0; i < groceries.length; i++) {

  	if (groceries[i] === 'butter') {
     total += 1;
    } else if (groceries[i] === 'eggs') {
     total += 2;
    } else if (groceries[i] === 'milk') {
     total += 3;
    } else if (groceries[i] === 'bread') {
     total += 4;
    } else if (groceries[i] === 'cheese') {
     total += 5;
    }
  }
  return total;
}

  function mostExpensiveGroceries(groceriesList) {
    let totals = [];

    for (let i = 0; i < groceriesList.length; i++) {
      totals.push(costOfGroceries(groceriesList[i]))
    }

    return totals.indexOf(Math.max(...totals));

}


// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
