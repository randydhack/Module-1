// Your code here
let matrixAddition = function(matrix1, matrix2) {
    let width1= matrix1.length
    let width2 = matrix1.length

    let sum = [];

    for (let row = 0; row < width1 || row < width2; row++) { // height should be 2
        let subRow = matrix1[row];
        let newRow = [];

        for (let col = 0; col < subRow.length; col++) { // inside should be length of give arr

            newRow.push(matrix1[row][col] + matrix2[row][col])
        }
        sum.push(newRow);
    }
    return sum;
  }


  let matrixA = [[2,5],
                 [4,7]]

  let matrixB = [[9,1],
                 [3,0]]

  let matrixC = [[-1,0],
                 [0,-1]]

  let matrixD = [[2, -5],
                 [7, 10],
                 [0, 1]]

  let matrixE = [[0 , 0],
                 [12, 4],
                 [6,  3]]

  console.log(matrixAddition(matrixA, matrixB)); // [[11, 6], [7, 7]]
  console.log(matrixAddition(matrixA, matrixC)); // [[1, 5], [4, 6]]
  console.log(matrixAddition(matrixB, matrixC)); // [[8, 1], [3, -1]]
  console.log(matrixAddition(matrixD, matrixE)); // [[2, -5], [19, 14], [6, 4]]
