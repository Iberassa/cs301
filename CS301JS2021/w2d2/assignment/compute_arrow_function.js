let compute = function (expression, number1, number2) {
    if (expression === "add") {
        return add(number1, number2)
        } else
            return "The expression entered is not right."
}
let add = (number1 , number2) => console.log(number1+number2)  //Refactor to pass add logic as an arrow function answer.


compute("add",2,3)