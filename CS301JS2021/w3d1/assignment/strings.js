"use strict";
exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;
// 1. Write the code, one line for each action:
let car = {};
car.make = "Toyota";
car.model = "Camry";
console.log(car);
car.model = "RAV4";
console.log(car);
delete car.make;
console.log(car);

/*
2.	Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
It can assume that the only properties it needs to check are name and age
*/
/**
 * 
 * @param {object} obj1 values in an object 
 * @param {object} obj2 values in an object
 * @returns {boolean} returns true if the objects are the same else false
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else
        return false;
}

/*
3.	Write the function countProperties(obj) which returns number of properties of an object.
*/
/**
 * 
 * @param {objects} obj objects that will be evaluated 
 * @returns {number} number of properties in the object
 */
function countProperties(obj){
    let count = 0;
    for(let prop in obj){
        if(Boolean(prop)===true){
            count++;
        }
    }
    return count;
}

/*
4.	Write a function checkSpam(str) that returns true if str contains text "lottery" or "prize", otherwise return false. 
*/
/**
 * 
 * @param {String} str a string to surch in the two values  
 * @returns {boolean} returns true if the spam word is in the str else false
 */
function checkSpam(str){
    if(str.indexOf("lottery")!== (-1) || str.indexOf("prize")!== (-1)){
        return true;
    }
    return false;
}

/*
5.	Write a function named suffix that returns the common suffix of two strings. For example, the common suffix of “swimming” 
and “walking” is “ing”. This function takes two parameters and returns the common suffix.
*/
/**
 * 
 * @param {string} str1 a string value to be surched for common suffix 
 * @param {string} str2 a string value to be surched for common suffix
 * @returns {string} common Suffix
 */
function suffix(str1,str2){
    let commonSuffix = "";
    if (str1.slice(-3) === str2.slice(-3)){
        return commonSuffix = (str1.slice(-3));
    }else{
        return commonSuffix;
    }
}

// 6.	Write a function named titleCase with one parameter named s. This function 
// returns a copy of s but with the first letter of each word capitalized.
/**
 * 
 * @param {string} s the string of 
 * @returns {string} output is the input string with the first letter capitalized 
 */
function titleCase(s){
    let firstletter = s.slice(0,1);
    let capitalFirstLetter = firstletter.toUpperCase();
    let outPut = capitalFirstLetter + s.slice(1);
    return outPut;
}

/*
7.	Write the function getAverageAge(users) that gets an array of objects with two properties name and age and returns the average age.
Use for .. of
*/
/**
 * 
 * @param {Array} arr array which contains objects with value name and age
 * @returns {Number} returns the average age in the array 
 */
function getAverageAge(arr){
    let averageAge = 0;
    let ageTotal =0;
    let count = 0;
    for (let sum of arr ){
        ageTotal = ageTotal+ sum.age;
        count++;    
    }
    averageAge = ageTotal / count;
    return averageAge;
}

/* 8.	Write a function, sumFirst, to return the sum of the first elements of the inner arrays for arrays with the following structure. 
Use a for .. of loop.  
arr = [[1, 2], [3, 4], [5, 6]]  
*/
/**
 * 
 * @param {Array} arr an array holding multiple arrays inside it
 * @returns {number} sum returns the sum of the first elemnts of the inside arrays 
 */
function sumFirst(arr){
    let sum = 0; 
    for ( let insideArr of arr){
          sum += insideArr[0]; 
    }
    return sum;
}

/*From Reading:
1. How can you make a copy of an object?
   We can copy objects by using object reference. That way there will be two things that refer one value. 

2. How do you remove the white spaces that may be at the beginning and ending of a string
value?   
      We can use str.trimleft() to remove the space from the left and str.trimRight() for the white   
*/ 