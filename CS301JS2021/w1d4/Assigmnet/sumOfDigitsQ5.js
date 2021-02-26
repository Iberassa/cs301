let prompt = require("prompt-sync")();
let number = +(prompt("Enter the value of your number: "));
let sum = 0;
while(number!==0){
    let remainder = number%10
    sum += remainder
    number = parseInt(number/10)
}
console.log("The sum of the digits is ",sum);