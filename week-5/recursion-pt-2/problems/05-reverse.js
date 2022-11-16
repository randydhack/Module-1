/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(str) {
  debugger
  if (str.length <= 1) {
    return str;
  }

  return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}
console.log(reverse("dog")); // "god"
/*
Base Case: length of string <= 1
Recursion Case:
Recursion Step: Return the last index of the string and returning the function string split before the last index

-------------------------------------------------------------------------------------

1. 'house' -> 'e' + 'hous'
2. 'ehous' -> 'es' + 'hou
3. 'eshou' -> 'esu' + 'ho'
4. 'esuho' -> 'esuo' + 'h'
5. 'esuoh' -> 'euosh'

/*

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
