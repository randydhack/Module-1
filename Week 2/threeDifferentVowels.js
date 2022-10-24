// Your code here
let hasThreeVowels = function(str) {

    str = str.split(''); // turn into an arr so i can use filter method
    let count = 0; // count amount of vowels

    let unique = str.filter((item, i, arr) => arr.indexOf(item) === i); // filter uniques only

    for (let i = 0; i < unique.length; i++) { // loops through the unique arr
        if (unique[i].match(/[aiueo]/gi)) { // count vowels only
            count++;
        }
    }
    return count >= 3; // return the counted vowels found greater than/equal to 3
}

  console.log(hasThreeVowels('delicious'));       //  true
  console.log(hasThreeVowels('bootcamp prep'));   //  true
  console.log(hasThreeVowels('bootcamp'));        //  false
  console.log(hasThreeVowels('dog'));             //  false
  console.log(hasThreeVowels('go home'));         //  false
