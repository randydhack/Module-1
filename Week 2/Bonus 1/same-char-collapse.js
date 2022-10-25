function sameCharCollapse(str) {

    let condition = true;

    while (condition) {
     let arr = str.split("");
      condition = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === arr[i+1]) {

          arr[i] = "";
          arr[i+1]= "";
          condition = true;
          }
        }
      str = arr.join("");
    }
    return str;
  }

  console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
  // because zzzxaaxy -> zxaaxy -> zxxy -> zy
  console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
  // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
