function doubleLetterCount(string) {

    let count = 0;

    for (let i = 0; i < string.length; i++) {

      if (string.charAt(i) === string.charAt(i + 1)) {

          count++;
      }
    }
    return count;
  }

  console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
  console.log(doubleLetterCount("bootcamp")); // 1
