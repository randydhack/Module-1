// your code here
let yeller = function(words) {

    let map = words.map(ele => ele.toUpperCase() + '!');

    return map;
  }



  console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
  console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
