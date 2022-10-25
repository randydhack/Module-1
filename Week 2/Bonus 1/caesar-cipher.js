// Feel free to use this variable:
// const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher(string, num) {
    // your code here
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";

  for (let i = 0; i < string.length; i++) {

    let letter1 = string[i];

    for (let j = 0; j < alphabet.length; j++) {
      let letter2 = alphabet[j];

    if (letter1 === letter2) {
      newString += alphabet[j+num];
      console.log("str : " + newString);
    	}
    }
  }
 return newString;
}

console.log(caesarCipher("apple", 1)); // "bqqmf"
console.log(caesarCipher("bootcamp", 2)); // "dqqvecor"
console.log(caesarCipher("zebra", 4)); // "difve"
