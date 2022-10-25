// Your code here
let shortestWord = function(sentence) {

    sentence = sentence.split(' ');

    let shortest = sentence.reduce((prev, curr) => {

      return curr.length <= prev.length ? curr : prev;
    }, sentence[0]);

    return shortest;
  }


  console.log(shortestWord('what a wonderful life'));     // 'a'
  console.log(shortestWord('the quick brown fox jumps')); // 'fox'
  console.log(shortestWord('do what you enjoy'));         // 'do'
