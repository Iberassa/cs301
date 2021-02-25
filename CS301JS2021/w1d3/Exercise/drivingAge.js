let prompt = require("prompt-sync")();
let age = +(prompt("Enter your age: "));
if (age <= 0){
console.log("please enter valid age")
} else
if (age <=14){
console.log("You can't drive yet.")
} else
if (age <= 18){
console.log("You can drive under supervision.")
} else
if (age >= 19){ 
console.log("You can drive.");
}