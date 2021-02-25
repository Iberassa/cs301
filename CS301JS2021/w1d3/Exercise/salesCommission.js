let prompt = require("prompt-sync")();
let salesman_salary = +(prompt("What is your salary: "));
let sales = +(prompt("Enter your sales value: "))
if (salesman_salary > 0) {
    if (sales < 300) {
        console.log("No commission, sorry.")
    } else
        if (sales < 500) {
            console.log("your commission is " + (0.01 * sales) + ".")
        } else
            console.log("your commission is " + (0.02 * sales) + ".")
}
    if (salesman_salary === 0) {
        if (sales < 300) {
            console.log("No commission, sorry.")
        } else if (sales < 500) {
            console.log("your commission is " + (0.02 * sales) + ".")
        } else
            console.log("your commission is " + (0.03 * sales) + ".")
    }
