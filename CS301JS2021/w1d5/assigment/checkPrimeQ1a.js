function check_prime(number) {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(check_prime(5))
