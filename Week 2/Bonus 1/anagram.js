function anagrams(word1, word2) {

    let strWord = "";

    for (let i = 0; i < word1.length; i++) {
      let letter1 = word1[i];

      for (let j = 0; j < word2.length; j++) {

       let letter2 = word2[j];
        if (letter1 === letter2) {
          strWord += letter2;
        }
      }
    }

    return strWord === word1;
  }

  console.log(anagrams("cat", "act"));          // true
  console.log(anagrams("restful", "fluster"));  // true
  console.log(anagrams("cat", "dog"));          // false
  console.log(anagrams("boot", "bootcamp"));    // false
