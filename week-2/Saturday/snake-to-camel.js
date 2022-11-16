// Your code here
let snakeToCamel = function(str) {

    str = str.split('_');
    let result = [];
    for (let i = 0; i < str.length; i++) {
         let first = str[i][0].toUpperCase();
      let second= str[i].slice(1).toLowerCase();
      result.push(first + second);
    }
    return result.join('');
  }


  console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
  console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
  console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
  console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'
