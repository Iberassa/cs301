let prompt = require ("prompt-sync")();

let salary = +(prompt("Enter your gross salary of the year: "))

let tax=0;

if(salary<=20000){

console.log("You do not have to pay federal tax.")

}else {

if (salary <= 50000){

tax=(salary-20000)*0.05

console.log("your federal tax pay is ", tax)

}else {

tax=((salary-50000)*0.1)+1500

console.log("Your federal tax pay is ",tax)

}

}