function luckyNumbers(matrix) {
    // your code here...
    let res = [];
    let M = matrix.length, N = matrix[0].length;
    let min = Array(M).fill( Infinity);
    let max = Array(N).fill(-Infinity);

    // console.log(min, max);

     for (let i = 0; i < M; ++i) { // first row of matrix. ech iteration goes through each row

     for (let j = 0; j < N; ++j) { // the elements inside the row

     min[i] = Math.min(min[i], matrix[i][j]), // goes into row, then find smallest value, and redeclare value of min
       console.log(min[i], 'min', min)
     max[j] = Math.max(max[j], matrix[i][j]),
       console.log(max[j], 'MAX', max);// goes into row, then finds highest value, and redeclare value of max
         }
     }

  // ------------------------------

     for (let i = 0; i < M; ++i) { // first row of matrix. ech iteration goes through each row

     for (let j = 0; j < N; ++j) { // goes back into row's element
     if (min[i] === max[j]) {

       // console.log(min[i],max[j]);
       res.push(matrix[i][j]);
             }
         }
    }

     return res;

  }


  matrix = [[ 5,  9, 21],
            [ 9, 19,  6],
            [12, 14, 15]]

  console.log(luckyNumbers(matrix)); // [12]

  matrix = [[ 5, 10,  8,  6],
            [10,  2,  7,  9],
            [21, 15, 19, 10]]

  console.log(luckyNumbers(matrix)); // [10]
