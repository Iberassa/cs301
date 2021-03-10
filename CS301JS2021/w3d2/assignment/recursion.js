"use strict";
module.exports = { power, countDigits, reverse }

/* 1) 
   a)calculate the power of any base */
/**
 * 
 * @param {number} value number to be powered 
 * @param {number} raiseTo number used to power the value
 * @returns {number} the powered value
 */
function power(value,raiseTo){
    if(raiseTo === 1){
        return value;
    }else {
        value = value * power(value , raiseTo - 1); 
        return value;
    }
}
// b) count the digits of a given number
/**
 * 
 * @param {number} num is the number to count the digits
 * @returns {number} digits og the number 
 */
function countDigits(num){
    let count = 1;
    if((num/10) === 0){
        return 1;
    }else {
        return count + (countDigits(Math.floor(num/10)-1));
    }
}

// c) reverse a given string. 
/**
 * 
 * @param {string} str the string to be reversed 
 * @returns {string} the output will be the reversed string
 */
function reverse(str){
    let out = "";
    if (str.length === 0 ){
        return str;
    }else {
        out = str.slice(-1) + reverse(str.slice(0,str.length-1));
        return out;
    } 
}

/*  
Here is the code for the suffix question from the monday's assignment that works
for strings that have unequal length.  
*/
/**
 * 
 * @param {string} str1 a string value to be surched for common suffix 
 * @param {string} str2 a string value to be surched for common suffix
 * @returns {string} common Suffix
 */
 function suffix(str1, str2) {
    let commonSuffix = "";
    for (let i = str1.length-1; i >= 0 ; i--) {
        for (let j = str2.length-1; j >= 0; j--) {
            if (str1.slice(i) === str2.slice(j)) {
                commonSuffix = (str1.slice(i));
                break;
            } 
        }
    }
    return commonSuffix;
}
