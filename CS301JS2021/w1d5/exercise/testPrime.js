function testPrime(number){
    for(i=2;i<number;i++){
        if (number%i===0){
            return false;
        }
    }
    return true
} 

console.log(testPrime(8))