let prompt = require("prompt-sync")();
let begining_mileage=prompt("Enter the value of the mileage before the start: ");
let stoping_mileage=prompt("Enter the value of the mileage at the endof your route: ");
let number_of_gallons = prompt ("Enter the value of the gas usage in gallon: ");
let gallon_used=parseFloat(number_of_gallons)
let start_mileage= parseFloat(begining_mileage);
let end_mileage=parseFloat(stoping_mileage);
let mileage = (end_mileage-start_mileage)/gallon_used
console.log(milage);