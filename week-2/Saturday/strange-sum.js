// your code here
let strangeSums = function(nums) {

    let count = 0;

    for (let i = 0; i < nums.length; i++) {

      for (let j = i + 1; j < nums.length; j++) {

        if (nums[i] + nums[j] === 0) {
          count++;
        }
      }
    }
      return count;
  }

  console.log(strangeSums([2, -3, 3, 4, -2]));     // 2
  console.log(strangeSums([42, 3, -1, -42]));      // 1
  console.log(strangeSums([-5, 5]));               // 1
  console.log(strangeSums([19, 6, -3, -20]));      // 0
  console.log(strangeSums([9]));                   // 0
