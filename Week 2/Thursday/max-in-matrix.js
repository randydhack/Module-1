let maxInMatrix = function(matrix) {

    let largest = -Infinity;

    for (let row = 0; row < matrix.length; row++) {
      let subRow = matrix[row];
      for (let col = 0; col < subRow.length; col++) {
        let subCol = subRow[col];

        if (subCol > largest) {

          largest = subCol;
        }
      }
    }

    return largest;
  }


  matrix = [[-99,  2, 11],
            [20, 19, 10],
            [47, 72, 56]]

  console.log(maxInMatrix(matrix)); // 72
