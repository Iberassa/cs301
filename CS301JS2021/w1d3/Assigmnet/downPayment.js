/*                                  
                                       Defining table

        Input                            Procesing                                    output
-Cost of the house.                -Calculating the down payment              -Down payment  
                                    depending on the cost and the
                                    rate given in the table. 
                                      
 */
let prompt = require("prompt-sync")();
let cost_of_house = +(prompt("What is the cost of the house: "));
if (cost_of_house < 50000){
    console.log("Your down payment is ", (0.05*cost_of_house));
} else 
if (cost_of_house < 100000){
    console.log("Your down payment is ", (1000+(0.05*(cost_of_house-50000))));
} else 
if (cost_of_house < 200000){
    console.log("Your down payment is ", (2000+(0.15*(cost_of_house-100000))));
} else 
console.log("Your down payment is ", (5000+(0.01*(cost_of_house-200000))));
