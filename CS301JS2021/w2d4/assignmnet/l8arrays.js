"use strict";
exports.addend = addend;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
/* 1.	Write a function addend(arr) that accepts an array of numbers as parameters and returns the sum of first and last elements of the array. */
/**
 * @param {Array} arr array of numbers
 * @return {number} returns sum 
 */
function addend(arr) {
    let sum = arr[0] + arr[arr.length - 1];
    return sum;
}

/* 2.	Write a function named getMiddle that returns the value of the middle element in an array. If 
the array has an even number of elements, then this function must return the average of the two middle elements. */
/**
 * 
 * @param {Array} arr inputs array of numbers
 * @return {number} middle returns the middle part of the array 
 */
function getMiddle(arr) {
    let middle = 0;
    if (arr.length % 2 === 0) {
        middle = (arr[arr.length / 2] + arr[(arr.length / 2) + 1]) / 2;
    } else {
        middle = arr[Math.floor(arr.length / 2)];
    }
    return middle;
}

/* 3.	Write a function to rotate the elements in an array to the left by 1. */
/**
 * 
 * @param {Array} arr numbers to be rotated
 * @return {Array} rotated one times to the left 
 */
 function rotateLeft(arr) {
    let rotated = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr.length - i === arr.length) {
            rotated.push(arr[0]);
            break;
        }
            rotated.push(arr[(arr.length) - i]);
        }
    return rotated;
}
//4. Write a function to rotate the elements in an array to the right by 1.
/**
 * 
 * @param {Array} arr numbers to be rotated
 * @return {Array} rotated one times to the right 
 */
 function rotateRight(arr) {
    let rotated = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            rotated.push(arr[arr.length - 1]);
        } else {
           rotated.push(arr[i - 1]);
        }
    }
    return rotated;
}

/* 5.	Modify each rotate function to rotate array by n times where, n is the second parameter passed in the function (EC). n < number of elements */

