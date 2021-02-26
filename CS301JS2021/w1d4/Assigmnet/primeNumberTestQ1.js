let prompt = require("prompt-sync")();
let number = +(prompt("Enter a number to check if it is a prime number or not: "))
let num=2;
let answer; 
while(num<number){
    if (number%num===0){
        answer= number + " is not a prime number."
        break;
    }
    num++
    answer = number + " is prime" 
} 
console.log(answer)


