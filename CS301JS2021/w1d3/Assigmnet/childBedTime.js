/*                                  
                                       Defining table

        Input                            Procesing                               output
-The inputs will be the age        -Check if the child's age                -Depending on the age and the  
 of the child and season of the     is below 5, between 5 and 12             season of the year specify the 
 year.                              or greater or equals to 13 and           sleeping time of the child.
                                    check if the season of the year
                                    is winter, summer, spring or fall.                   

 */
let prompt = require("prompt-sync")();
let age = +(prompt("What is the age of the child: "));
let season = prompt("whatis the season of the year: ");
if (age <= 5) {
    if (season === "summer" || "fall") {
        console.log("Bed time is at 8:30 PM.");
    } else
        if (season === "winter" || "spring") {
            console.log("Bed time is at 8:00 PM.");
        }
}else
if (age <= 12) {
    if (season === "summer") {
        console.log("Bed time is at 9:30 PM.");
    }else
    if (season === "winter" || "spring" || "fall") {
        console.log("Bed time is at 8:30 PM.");
    }
}else
if (age>=13){
    if (season==="summer"){
        console.log("Bed time is at 10:30 PM.");
    }else
    if (season==="winter" ||"spring"||"fall"){
        console.log("Bed time is at 9:30 PM.")
    }
}
else {
    console.log("please enter a valid age or season of the year.")
}