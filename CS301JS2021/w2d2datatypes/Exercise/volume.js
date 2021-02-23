let prompt = require ('prompt-sync')();
const radius = prompt('Enter the value of the radius: ');
const hight = prompt('Enter the value of the height: ');
height = parseFloat(hight);
r = parseFloat(radius);
const volume = Math.PI * (Math.pow(r,2)) * height; 
console.log(volume);
