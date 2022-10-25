// Your code here
let alternatingWords = function(words) {

    for (let i = 0; i < words.length; i++) {
      let lower = words[i].toLowerCase();

      if (words[i] !== lower) {

      words[i].toUpperCase();
        } else {

      words[i].toLowerCase();
        }
    }

    return words;
  }


  let words1 = [ 'Belka', 'STRELKA', 'laika', 'DEZIK' ];
  alternatingWords(words1);
  console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

  let words2 = [ 'Yellowstone', 'Yosemite', 'Zion', 'Acadia', 'Shenandoah' ];
  alternatingWords(words2);
  console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]
