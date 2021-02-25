let prompt = require("prompt-sync")();
let new_number = +prompt("Enter a number between 1 and 5: ");
let spelling;
switch (new_number) {
    case 1:
        spelling = "One";
        break;
    case 2:
        spelling = "Two";
        break;
    case 3:
        spelling = "Three";
        break;
    case 4:
        spelling = "Four";
        break;
    case 5:
        spelling = "Five";
        break;
}

console.log(spelling);
