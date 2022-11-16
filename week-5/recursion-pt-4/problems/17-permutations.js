/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  debugger
  if (array.length <= 1) return [array];

  let first = array.shift();
  let perms = permutations(array);
  let allPerm = [];

  for (let i = 0; i < perms.length; i++) {
    subPerm = perms[i]
    console.log(subPerm)
    for (let j = 0; j <= subPerm.length; j++) {
      console.log('---------------------------')
      let left = subPerm.slice(0,j)
      let middle = [first];
      let right = subPerm.slice(j);

      console.log('Left: ', left)
      console.log('Middle: ', middle)
      console.log('Right: ', right)

      allPerm.push(left.concat(middle).concat(right))
    }
  }
  return allPerm
}

console.log(permutations([1, 2, 3])) //

/*
First loop - Start at [3]
[],[2],[3]
[3],[2],[]

Second Loop - Start at [2,3]
[],[1],[2,3]
[2],[1],[3]
[2,3],[1],[]

Third Loop - Starts at [3,2]
[],[1],[3,2]
[3],[1],[2]
[3,2],[1],[]
*/
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
