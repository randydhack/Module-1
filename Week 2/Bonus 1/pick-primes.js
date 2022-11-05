function pickPrimes(array) {
    let prime_array = [];

    for (let i = 0; i < array.length; i++) {
        if (prime(array[i])) {
            prime_array.push(array[i]);
        }
    }

    return prime_array;
}

function prime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
