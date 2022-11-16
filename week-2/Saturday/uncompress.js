// your code here
let uncompress = function(str) {

    let result = '';

    for (let i = 0; i < str.length; i+=2) {
     let num = Number(str[i+1]);

      for (let j = 0; j < num; j++) {

        result += str[i];
      }
    }
    return result;
  }




  console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
  console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
  console.log(uncompress('b1o2t1')); // 'boot'
