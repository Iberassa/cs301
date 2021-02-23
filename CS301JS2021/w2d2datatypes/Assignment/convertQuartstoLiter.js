let prompt = require('prompt-sync')();
let volume_in_quarts = prompt("Enter the volume in quarts: ");
volumeinquarts=parseFloat(volume_in_quarts);
let volume_in_liter= volumeinquarts*1.5;

console.log(volume_in_liter);