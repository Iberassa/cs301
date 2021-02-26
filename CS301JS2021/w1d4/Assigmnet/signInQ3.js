let prompt = require ("prompt-sync")();
let password=prompt("Enter your password: ")
if(password!=="password"){
for(let i=1;i<3;i++){
    password=prompt("Enter your password: ")
}
console.log("Sorry but you have been locked out.")
}else{
    console.log("Welcome!!")
}
