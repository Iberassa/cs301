/*                                  
                                       Defining table

        Input                            Procesing                                    output
-Weather condition.                -Check if the weather is hot,               -Depending on the weather 
                                    rain, snow or other.                        select the shoe.
                                       
                                      
 */
let prompt = require("prompt-sync")();
let choose_weather = prompt("Enter the day's weather: ");
if (choose_weather==="hot"){
  console.log("you should wear a sandals.");
}
else
  if (choose_weather==="rain"){
  console.log("you should wear a galoshes.");
    }
    else  
  if (choose_weather==="snow"){
  console.log("you should wear a boots.")
    }  
    else 
  console.log("you should wear a sneakers.")