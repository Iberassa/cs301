let prompt = require('prompt-sync')();
let kilometer = prompt("Enter the kilometer value: ");
let entered_kilometer_value= parseFloat(kilometer);
let value_in_miles= entered_kilometer_value*(5/8);
console.log(value_in_miles);