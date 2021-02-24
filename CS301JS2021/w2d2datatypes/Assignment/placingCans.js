let prompt = require("prompt-sync")();
let number_of_totalboxes = prompt("Enter the total number of boxes: ");
let number_of_totalstack_places = prompt("Enter the number of boxes you will place in each stack: ");
let total_boxes = parseFloat(number_of_totalboxes);
let total_stack_places = parseFloat(number_of_totalstack_places);
let number_of_stacks = Math.ceil(total_boxes/total_stack_places);
console.log(number_of_stacks); 
