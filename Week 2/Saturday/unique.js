// Your code here
let unique = function(arr) {

    return arr = arr.filter((x, i, a) => { return a.indexOf(x) === i; });

  }


  console.log(unique([1, 1, 2, 3, 3])); // [1, 2, 3]
  console.log(unique([11, 7, 8, 10, 8, 7, 7])); // [11, 7, 8, 10]
  console.log(unique(['a', 'b', 'c', 'b'])); // ['a', 'b', 'c']
