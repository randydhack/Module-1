function fibonacci(length) {

    if (length === 0) {
      return [];
    } else if (length === 1){
      return [1];
    }

    let arr = [1, 1];

    while (arr.length < length) {

      let last = arr[arr.length - 1];
      let recent = arr[arr.length - 2];
      let newArr = last + recent;

      arr.push(newArr);
  }

    return arr;
  }
  console.log(fibonacci(0)); // []
  console.log(fibonacci(1)); // [1]
  console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
  console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
