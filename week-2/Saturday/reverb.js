// Your code here
let reverb = function(word) {
    if (typeof(word) !== 'string') {
     return null;
    }
    let result = '';

    for (let i = word.length - 1; i >= 0; i--) {

      if (word[i].match(/[aiueo]/gi)) {
        return word + word.slice(i);

      }
    }
    return word;
  }


  console.log(reverb('running')); // runninging
  console.log(reverb('FAMILY'));  // FAMILYILY
  console.log(reverb('trash'));   // trashash
  console.log(reverb('DISH'));    // DISHISH
  console.log(reverb(197393));    // null
