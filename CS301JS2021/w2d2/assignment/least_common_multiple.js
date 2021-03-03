function highestCommonFactor(number1, number2) { // This function gives the greater common factor.
    let factorNumber1 = 0;
    let factorNumber2 = 0;
    for (i = 1; i <= number1; i++) {
        factorNumber1 = number1 / i;
        for (j = 1; j <= number2; j++) {
            factorNumber2 = number2 / j;
            if (factorNumber1 === factorNumber2) {
                return factorNumber1
            }
        }
    }
    return "They dont have HCF";
}


let leastCommonMultiple = function (number1, number2) {
    let numberProduct = number1 * number2
    let leastCommonMultiple = numberProduct / highestCommonFactor(number1, number2)
    if (parseInt(leastCommonMultiple) === leastCommonMultiple) {
        return leastCommonMultiple;
    }
}

console.log(leastCommonMultiple(15, 24)) 