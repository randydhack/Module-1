function tripleSequence(start, length) {

    // set a start arr.
    let newArr = [start];

    //iterate through the length.
    for (let i = newArr.length; i < length; i++) {

      newArr.push(newArr[newArr.length - 1] * 3); // push new value, find current index of newArr and multiply it by 3.

    }

    return newArr;
  }

  console.log(tripleSequence(2, 4)); // [2, 6, 18, 54]
  console.log(tripleSequence(4, 5)); // [4, 12, 36, 108, 324]
