function summation(n) { // called from "summationSequence
    let sum = 0; // set sum to 0 as so a new number can be added through each iteration.
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum; // return the sum once i === n.
}

function summationSequence(start, length) {
    let seq = [start]; // create an array with a starting point of "start"


    for (let i = seq.length; i < length; i++) {  // increment through the array until it reachest desire length.

      // you want to push a new value into the array.
      // you are calling the function "summation" with an argument of seq's current index, which is 3.
      // now it goes through the funcation "summation" parameter (n) = 3.
        seq.push(summation(seq[seq.length - 1]));
    }

    return seq; // return the array once iteration is complete.
}

console.log(summationSequence(3, 4)); // [3, 6, 21, 231]
console.log(summationSequence(5, 3)); // [5, 15, 120]
