function adjacentSum(numArray) {

    let newArr = [];
    let count = 0;

    while (count < numArray.length - 1) {

      let first = numArray[count];
      let second = numArray[count + 1];

      let added = first + second;

      newArr.push(added);

      count++;
    }
    return newArr;
  }
  console.log(adjacentSum([3, 7, 2, 11])); // [10, 9, 13], because [ 3+7, 7+2, 2+11 ]
  console.log(adjacentSum([2, 5, 1, 9, 2, 4])); // [7, 6, 10, 11, 6], because [2+5, 5+1, 1+9, 9+2, 2+4]
