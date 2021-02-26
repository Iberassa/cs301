/*
                               Defining table

           Input                            Procesing                                  output
 -The number which determines           -using loop add the                 - the fibonacci series       
  until which state of the series        f(n-2) and f(n-1) positioned
  appears.                               numbers untill n equals to 
                                         the number given. 

*/
let prompt = require("prompt-sync")();
let number = +(prompt("Enter to how many fibonacci series you want: "));
let first_num = 0
let second_num = 1
let sum =0; 
for(i=0;i<=number;i++){
   console.log(first_num);
   sum=second_num+first_num;
   first_num=second_num;
   second_num=sum;
}