"use strict";
exports.checkPrime = checkPrime;
/**
 * 
 * @param {number} number is the number to be evaluated
 * @return {boolean} result
 */
function checkPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// let prompt = require("prompt-sync")();
// let num = +(prompt("Enter a number to check if it prime or not: "));
// let ans= checkPrime(num);
// if (ans===true){
//     console.log(num," is prime.");
// }  else{
//     console.log(num," is not prime");
// }

