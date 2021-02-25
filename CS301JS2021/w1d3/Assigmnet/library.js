/*                                  
                                       Defining table

        Input                            Procesing                            output
-Status of the person in the       -Check if the person is               -Loan duration in weeks  
 university. wheather the person    student, faculty or other
 is student,faculty or other.       and Check the number of books 
-The number of books which are      that are overdue to know how  
 overdue.                           many weeks of duration the person
                                    can have.  

 */
let prompt = require("prompt-sync")();
let status = prompt("Enter your status in your university: ");
let books_overdue = +(prompt("Enter the number of books that are overdue: "));
if (status === "Student") {
    if (books_overdue === 0) {
        console.log("The loan duration for this person is 6 weeks");
    } else
        if (books_overdue < 3) {
            console.log("The loan duration for this person is 4 weeks");
        }
        else
            if (books_overdue >= 3) {
                console.log("The loan duration for this person is 2 weeks")
            }
}
if (status === "Faculty") {
    if (books_overdue === 0) {
        console.log("The loan duration for this person is 12 weeks");
    } else
        if (books_overdue < 3) {
            console.log("The loan duration for this person is 10 weeks");
        } else
            if (books_overdue > 3) {
                console.log("The loan duration for this person is 8 weeks");
            }
} else
    if (status !== "Student" && status !== "Faculty") {
        if (books_overdue === 0) {
            console.log("The loan duration for this person is 4 weeks");
        } else
            if (books_overdue < 3) {
                console.log("The loan duration for this person is 3 weeks");
            } else {
                console.log("The loan duration for this person is 2 weeks")
            }
    }