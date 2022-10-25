function consonantCancel(sentence) {

    let arr = sentence.split(" ");
    let str = [];

    for (let i = 0; i < arr.length; i++) {

      let word = arr[i];

      for (let j = 0; j < word.length; j++) {
        let letter = word[j];

        if (letter.match(/[aiueo]/gi)) {

          let remove = word.slice(j);
          str.push(remove);
          break;
        }
      }
    }
    return str.join(" ");
  }


  console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
  console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
