let prompt = require("prompt-sync")();
let number = +(prompt("Enter a number to get its factorial: "));
let factorial = 1
while(number>1){
 factorial *= number
 --number
}       
console.log(factorial);
