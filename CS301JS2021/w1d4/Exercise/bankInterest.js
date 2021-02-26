/*
• Make a defining table and program to print out the balance of a
savings account that compounds interest monthly. Prompt the user
for the
• initial amount
• annual interest rate
• number of years to compound
                                       Defining table

        Input                            Procesing                                  output
    - Initial amount                -Multiply the amount with the                 -The compound amount
    - Annual interest rate           interest rate then add the initial             for that year.
    - Number of years to compound    amount for the first year then multiply  
                                     the sum by the interest and add the
                                     sum for the second year. and do that until
                                     the year meets the number of years to compund 
*/

let prompt = require("prompt-sync")();
let initial_amount = +(prompt("Enter the intial deposited amount: "));
let interest_rate = +(prompt("Enter the interest rate: ")); 
let year = +(prompt("Enter the number of years to compound: "));
let balance = 0
for(i=year*12;i>0;--i){
 initial_amount = initial_amount*(interest_rate/12) + initial_amount
} 
console.log(initial_amount);
 
/* 
his answer
let monthly rate = annualinterest/12
const month = initialamount;
for (let i=1;i<= month;i++){
    balance = balance + monthlyrate*balance
}
*/
