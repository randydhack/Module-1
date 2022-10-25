/*
    Transpose
    Write a function transpose(arr) that accepts a two-dimensional array
    and returns a new version of the array with its columns and rows switched.
    See examples below:

    let arr1 = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
               ]

    console.log(transpose(arr1)); //prints: [
                                             [1, 4, 7],
                                             [2, 5, 8],
                                             [3, 6, 9]
                                            ]

    let arr2 = [
                [1, 2],
                [3, 4],
                [5, 6],
               ]

    console.log(transpose(arr2)); // prints: [
                                              [1, 3, 5],
                                              [2, 4, 6]
                                             ]

*/

function transpose(matrix) {

        let height = matrix[0].length;
        console.log(height)                                        // in the 2d array, there will be a total of 3 arrays, length will be 3;
        let width = matrix.length;                                       // this is the first row of the matrix with a total of 3 numbers;
        console.log(width)
        let result = [];

        for (let row = 0; row < height; row++) {                            // col ---> 5 then 9 then 21
         let maxNum = matrix[0][row];                                       // set curr max at row 0 at index col; check 5, check 9, check 21

          let newRow = [];                                                  // create an empty array, this will be the new row

          newRow.push(maxNum)                                               // pushes current row number to newRow
          for (let col = 1; col < width; col++) {                           // row = 1 --->  the second row of the matrix then third row
           let rowNum = matrix[col][row];                                   // set row's curr num ---> row = 1 is 9, row = 2 is 12

            newRow.push(rowNum);                                            // pushes current row number to newRow

          }
           result.push(newRow);                                             // push newRow of numbers into result at end of the loop
        }
        return result;                                                      // return Max in Columns
      }


      let arr1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
       ]

console.log(transpose(arr1)); //prints: [
                                    //  [1, 4, 7],
                                    //  [2, 5, 8],
                                    //  [3, 6, 9]
                                    // ]

let arr2 = [
        [1, 2],
        [3, 4],
        [5, 6],
       ]

console.log(transpose(arr2)); // prints: [
                                    //   [1, 3, 5],
                                    //   [2, 4, 6]
                                    //  ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
console.log('helloworld')
try {
    module.exports = transpose;
} catch (e) {
    module.exports = null;
}
