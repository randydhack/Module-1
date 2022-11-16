/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
    debugger

    // let min = Math.min(...nums)

    //     for (let i = 0; i < nums.length; i++) {

    //         if (min === nums[i]) {
    //             sorted.push(nums[i]);
    //             nums.splice(i,1);
    //             // console.log(nums.splice(1,1), nums );

    //             return sort(nums, sorted)
    //         }
    //     }
    //     return sorted;

    let min = Math.min(...nums);

    nums.forEach((el,i) => {
        if (el === min) {
            sorted.push(el);
            nums.splice(i,1)
            return sort(nums, sorted)
        }
    });
    return sorted;
}

/*
Step 1. Use math.min to find min in array
Step 2. Loop through each element of the array until you find a match with min.
Step 3. Push element into 'sorted' and mutate the array using splice(i,1);
Step 4. Defined the recursion step and return.

--------------------------------------------------------------------------------------------------------------

Loop 1. [4, 1, 6, 3, 1, 7]    ->  min = 1  ->  Using loop, Array is now [4, 6, 3, 1, 7], Sorted is now [1].
Loop 2. [4, 6, 3, 1, 7]     ->  min = 1  ->  Using loop, Array is now [4, 6, 3, 7], Sorted is now [1, 1].
Loop 3. [4, 6, 3, 7]      ->  min = 3  ->  Using loop, Array is now [4, 6, 7], Sorted is now [1, 1, 3].
Loop 4. [4, 6, 7]       ->  min = 4  ->  Using loop, Array is now [6, 7], Sorted is now [1, 1, 3, 4].
Loop 5. [6, 7]       ->  min = 6  ->  Using loop, Array is now [7], Sorted is now [1, 1, 3, 4, 6].
Loop 5. [7]       ->  min = 7  ->  Using loop, Array is now [], Sorted is now [1, 1, 3, 4, 6, 7].

Finally, return sorted.
*/
// console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
