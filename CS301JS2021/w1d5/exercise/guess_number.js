let prompt = require("prompt-sync")();
let number = +prompt("Guess a number between one to ten: ");
let count = 0
if (number === 5) {
    console.log("Awesome!")
} else {
while (number !== 5) {
    number = +prompt("Guess a number between one to ten: ");
    count++
        if (number === 5 && count === 1) {
            console.log("Great!")
        }
        else 
            if (number === 5 && count === 2) {
                console.log("Notbad!")
            } else 
                if (number === 5 && count >= 3) {
                    console.log("It took you ", count, " attempts")
                }
            
        
    }
}