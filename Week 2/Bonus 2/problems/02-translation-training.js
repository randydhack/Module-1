/*
    Translation Training
    Write a function translationTraining(sentence) that accepts a sentence string and returns a new version of the sentence
    with the new words that alternate between having their first or last vowel removed.

    THe first word of the sentence should have its first vowel removed.
    The second word of the sentence should have its last vowel removed.
    The third word of the sentence should have its first vowel removed.
    The fourth word of the sentence should have its last vowel removed.

    A word without vowels should remain unchanged

    And so on. See examples below:

    console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
    console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
    console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
    console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

    Hint: Use helper methods.
*/

function translationTraining(sentence) {
    sentence = sentence.split(' ');

    let result = [];
    let count = 1;

    for (let i = 0; i < sentence.length; i++) {
        let word = sentence[i]; // current word

        if (count % 2 === 0) {
            for (let j = word.length - 1; j >= 0; j--) { // loop through word's of each char

                if (word[j].match(/[aiueo]/gi)) {
                    let first = word.slice(0, j);
                    let second = word.slice(j + 1);
                    result.push(first + second);
                    break;
                }
            }
        } else {
            for (let k = 0; k < sentence.length; k++) { // loop through word's of each char

                if (word[k].match(/[aiueo]/gi)) {
                    let first = word.slice(0, k);
                    let second = word.slice(k + 1);
                    result.push(first + second);
                    break;
                } else {
                    result.push(word);
                    break;
                }
            }
        }
        count++;
    }
    return result.join(' ');
}

// Your code here



console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = translationTraining;
} catch (e) {
    module.exports = null;
}
