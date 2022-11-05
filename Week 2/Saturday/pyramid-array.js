// For example, given 2, 3, 7, 5, 9 as the base, we should construct this pyramid:
//
//           85
//         37  48
//       15  22  26
//    5   10   12   14
//  2   3    7    5    9
//
//
// Your code here
let pyramidArray = function(base) {

    let result = [base];

    for (let i = 1; i < base.length; i++) {

      if (result.length < base.length) {
        let next = nextLevel(result[0]);
          result.unshift(next);
      }
    }
    return result;
  }

  let nextLevel = function(arr) {

    let result = [];

    for (let i = 1; i < arr.length; i++) {

      let first = arr[i - 1];
      let second = arr[i]
      let sum = first + second;

      result.push(sum);
    }
    return result;
  }



  let p1 = pyramidArray([2, 3, 7, 5, 9]);
  console.log(p1);
  // [
  //   [ 85 ],
  //   [ 37, 48 ],
  //   [ 15, 22, 26 ],
  //   [ 5, 10, 12, 14 ],
  //   [ 2, 3, 7, 5, 9 ]
  // ]

  let p2 = pyramidArray([2, 2, 2, 2]);
  console.log(p2);
  // [
  //   [ 16 ],
  //   [ 8, 8 ],
  //   [ 4, 4, 4 ],
  //   [ 2, 2, 2, 2 ]
  // ]
