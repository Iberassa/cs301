let prompt = require("prompt-sync")();
let number_entered = +(prompt("Enter a number between 1 and 10: "));
if (number_entered===7){
    console.log("Bingo!!");
}
else console.log("Try again");