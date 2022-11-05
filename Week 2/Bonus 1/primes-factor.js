function primeFactors(n) {
    let primes = [];

    for (let i = 1; i < n; i++) {
        if (n % i == 0 && prime(i)) {
            primes.push(i);
        }
    }

    return primes
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

console.log(primeFactors(24)); // [2, 3]
console.log(primeFactors(60)); // [2, 3, 5]
