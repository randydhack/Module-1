// function maxColumn(matrix) {

//   let copy = newMatrix(matrix);
//   let result = [];

//   for (let row = 0; row < copy.length; row++) {
//     let subRow = copy[row];

//     result.push(largestNum(subRow));
//   }
//   return result;
// }

// function largestNum(num) {

//   let largest = 0;

//   for (let i = 0; i < num.length; i++) {

//     if (largest < num[i]) {
//       largest = num[i];
//     }
//   }
//   return largest;
// }

// function newMatrix(arr) {

//   let copy = [];

//   for (let row = 0; row < arr.length; row++) {
//         for (let col = 0; col < arr[row].length; col++) {
//             if (copy[col] === undefined)
//               copy[col] = [];
//             copy[col][row] = arr[row][col];

//         }
//     }
//   return copy;
// }



function maxColumn(matrix) {

    let height = matrix.length; // in the 2d array, there will be a total of 3 arrays, length will be 3;
    let width = matrix[0].length; // this is the first row of the matrix with a total of 3 numbers;

    let result = [];

    for (let col = 0; col < height; col++) { // col ---> 5 then 9 then 21
     let maxNum = matrix[0][col]; // set curr max at row 0 at index col; check 5, check 9, check 21

      for (let row = 1; row < width; row++) { // row = 1 --->  the second row of the matrix then third row
       let rowNum = matrix[row][col]; // set row's curr num ---> row = 1 is 9, row = 2 is 12

        if (rowNum > maxNum) {

          maxNum = rowNum;
        }
      }
      result.push(maxNum); // pushes the max number in the column at end of loop, then iterates again until it stops
    }
    return result; // return Max in Columns
  }


  // TURN ALL COLUMNS INTO ROWS

  function columnsToRows(matrix) {

    let height = matrix.length; // in the 2d array, there will be a total of 3 arrays, length will be 3;
    let width = matrix[0].length; // this is the first row of the matrix with a total of 3 numbers;

    let result = [];

    for (let col = 0; col < height; col++) { // col ---> 5 then 9 then 21
     let maxNum = matrix[0][col]; // set curr max at row 0 at index col; check 5, check 9, check 21

      let newRow = []; // create an empty array, this will be the new row

      newRow.push(maxNum) // pushes current row number to newRow
      for (let row = 1; row < width; row++) { // row = 1 --->  the second row of the matrix then third row
       let rowNum = matrix[row][col]; // set row's curr num ---> row = 1 is 9, row = 2 is 12

        newRow.push(rowNum); // pushes current row number to newRow

      }
       result.push(newRow); // push newRow of numbers into result at end of the loop
    }
    return result; // return Max in Columns
  }



  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]


  console.log(maxColumn(matrix)); // [12, 19, 21]
  console.log(columnsToRows(matrix)); // [ [ 5, 9, 12 ], [ 9, 19, 14 ], [ 21, 6, 15 ] ]
