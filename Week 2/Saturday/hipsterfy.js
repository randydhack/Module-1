// your code here
let hipsterfy = function(sentence) {

    sentence = sentence.split(' ');
    let result = [];

    for (let i = 0; i < sentence.length ; i++) {
      let word = sentence[i];

      result.push(removeLastVowel(word));
      }
      return result.join(' ');
  }

  let removeLastVowel = function(word) {

    for (let i = word.length - 1; i >= 0; i--) {

      if (word[i].match(/[aiueo]/gi)) {
        let first = word.slice(0,i);
        let second = word.slice(i+1);

        return first + second
      }

    }
    return word;
  }


  console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
  console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
  console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
