let x = 10;
function main() {
let x = 0;
console.log("x1 is " + x);
x = 20;
console.log("x2 is " + x);
if (x > 0) {                  //0
x = 30;                       //20
console.log("x3 is " + x);    //30
}                             //30
console.log("x4 is " + x);    //50
function f(x) {               //30
console.log("x5 is " + x);    //10
}
f(50);
console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);