/*                                  
                                       Defining table

        Input                             Procesing                                    output
-Studet name and completed        -Evaluate if the completed credit              -Name and a lable which  
 credit hours by the student.      is lessthan 30, between 30 and 60,             discribes how much credits  
                                   between 60 and 90 or greaterthan or            completed.
                                   equals to 90.  
 */
let prompt = require("prompt-sync")();
let student_name = prompt("Enter your name: ");
let completed_credits = +prompt("Enter the creidts you completed: ");
if (completed_credits < 30) {
    console.log(student_name + " is a Freshman");
} else if (completed_credits < 60) {
    console.log(student_name + " is a Sophomore");
} else if (completed_credits < 90) {
    console.log(student_name + " is a Junior");
} else if (completed_credits >= 90) {
    console.log(student_name + " is a Senior");
}

