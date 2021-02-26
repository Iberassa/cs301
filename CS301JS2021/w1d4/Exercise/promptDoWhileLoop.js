/*
• Write a loop that keeps on prompting for age until you enter age
older than 18
• Write both while and do while versions.
*/ 
let prompt = require("prompt-sync")();
let age = prompt("Enter a valid age: ");
do{ (age = prompt("Enter a valid age: "))
} while(age<18); 
