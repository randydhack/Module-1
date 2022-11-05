// Your code here
let chooseyEndings = function(words, str) {
    if (!Array.isArray(words)) return [];

    let result = [];

    for (let i = 0; i < words.length; i++) {

      if (words[i].endsWith(str)) {

        result.push(words[i]);
      }
    }
    return result;
  }

  console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
  // [ 'family', 'fly', 'timidly' ]

  console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
  // [ 'hound', 'bond' ]

  console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
  // [ 'simplicity', 'felicity' ]

  console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
  // [ ]

  console.log(chooseyEndings(17, 'ily'));
  // [ ]
