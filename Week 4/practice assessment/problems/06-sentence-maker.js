/***********************************************************************
Write a function using fat arrow syntax, `sentenceMaker` that
takes in any number of arguments as strings, and create a sentence out
of it. You may assume that all arguments will be strings. Add an exclamation
mark at the end of the sentence.

Examples:

sentenceMaker('Hello', 'World'); // 'Hello World!'
sentenceMaker('I', 'love', 'coding'); // 'I love coding!'
sentenceMaker('The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'); // 'The quick brown fox jumps over the lazy dog!'
***********************************************************************/

// Your code here

const sentenceMaker = (...strings) => {
	let str = '';

	for (let i = 0; i < strings.length; i++) {
		let el = strings[i];
		let notAnIndex = strings[i + 1];

		if (notAnIndex === undefined) {
			str += el + '!';
		} else {
			str += el + ' ';
		}
	}
	return str
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
	module.exports = sentenceMaker;
} catch (e) {
	module.exports = null;
}
