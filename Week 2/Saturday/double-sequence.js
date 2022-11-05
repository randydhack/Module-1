// Your code here
function doubleSequence(length, base) {

    let result = [];

    let num = 0;

    for (let i = 0; i < base; i++) {

      if (result === undefined) {
        result.push(length);

      } else {

      num = length * 2;
      result.push(num);
      length = num;
      }
    }

    return result;
  }


  console.log(doubleSequence(7, 3));  // [7, 14, 28]
  console.log(doubleSequence(3, 5));  // [3, 6, 12, 24, 48]
  console.log(doubleSequence(5, 3));  // [5, 10, 20]
  console.log(doubleSequence(5, 4));  // [5, 10, 20, 40]
  console.log(doubleSequence(5, 0));  // [ ]
