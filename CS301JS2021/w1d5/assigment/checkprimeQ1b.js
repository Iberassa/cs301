function check_prime(number) {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

let prompt = require("prompt-sync")();
let num = +(prompt("Enter a number to check if it prime or not: "));
let ans= check_prime(num);
if (ans===true){
    console.log(num," is prime.")
}  else{
    console.log(num," is not prime")
}