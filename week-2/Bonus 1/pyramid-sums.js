function pyramidSum(base) {
    let pyramid = [base];

    while (pyramid.length < base.length) {
        let prevLevel = pyramid[0];
        let nextLevel = adjacentSum(prevLevel);
        pyramid.unshift(nextLevel);
    }
    return pyramid;
}


function adjacentSum(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {
            newArr.push(arr[i] + arr[i + 1]);
        }
    }
    return newArr;
}


console.log(pyramidSum([1, 4, 6])); // [[15], [5, 10], [1, 4, 6]]
console.log(pyramidSum([3, 7, 2, 11])); // [[41], [19, 22], [10, 9, 13], [3, 7, 2, 11]]
