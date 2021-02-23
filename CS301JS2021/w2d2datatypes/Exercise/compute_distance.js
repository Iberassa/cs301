let prompt = require ('prompt-sync')();
const xpoint1 = prompt('Enter the value of the first x coordinate point: ');
const ypoint1 = prompt('Enter the value of the first y coordinate point: ');
const xpoint2 = prompt('Enter the value of the second x coordinate point: ');
const ypont2 = prompt('Enter the value of the second y coordinate point: ');
let x1=parseFloat(xpoint1);
let y1=parseFloat(ypoint1);
let x2=parseFloat(xpoint2);
let y2=parseFloat(ypoint2);
const xdiff = x1-x2;
const ydiff = y1-y2;
const sum_square = (xdiff * xdiff) + (ydiff*ydiff)
const distance = Math.sqrt(sum_square);
console.log(distance);