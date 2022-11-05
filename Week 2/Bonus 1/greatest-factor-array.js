function greatestFactorArray(array) {

    let newArr = [];

    for (let i = 0; i < array.length; i++) {

      if (array[i] % 2  === 0) {
        let newNum = array[i] / 2;

        newArr.push(newNum);

      } else {
            newArr.push(array[i]);
      }
    }
    return newArr;
  }

  console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
  console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
