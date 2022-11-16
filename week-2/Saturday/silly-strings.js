// Your code here
let sillyString = function(word) {

    let result = [];
    let str = '';
    let vowels = 'aiueo';

    for (let i = 0; i < word.length; i++) {
     let letter = word[i];

      if (vowels.includes(letter)) {

          str += letter + 'b'+ letter;

      } else {

        str += letter
      }
    }
    return str;
  }

  console.log(sillyString('stop'));       // stobop
  console.log(sillyString('that'));       // thabat
  console.log(sillyString('can'));        // caban
  console.log(sillyString('cats'));       // cabats
  console.log(sillyString('italy'));      // ibitabaly
  console.log(sillyString('scooter'));    // scobooboteber
