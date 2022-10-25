// Your code here
let fib = function(n) {
    if (n === 1) {
     return 1;
    }

    let first = 1;
    let second = 1;
    let i = 1;

    while (i < n) {
     let curr = first;

      first = first + second;
      second = curr;
      i++;

    }
    return second;
  }


  console.log(fib(1));    // 1
  console.log(fib(2));    // 1
  console.log(fib(3));    // 2
  console.log(fib(4));    // 3
  console.log(fib(5));    // 5
  console.log(fib(6));    // 8
  console.log(fib(10));   // 55
  console.log(fib(11));   // 89
  console.log(fib(12));   // 144
