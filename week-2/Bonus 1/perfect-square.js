function perfectSquare(num) {

    let squared = Math.sqrt(num);

    if (num % squared === 0) {
      return true;
    } else {
      return false;
    }
  }

  console.log(perfectSquare(6));   // false
  console.log(perfectSquare(15));  // false
  console.log(perfectSquare(18));  // false
  console.log(perfectSquare(9));   // true
  console.log(perfectSquare(36));  // true
