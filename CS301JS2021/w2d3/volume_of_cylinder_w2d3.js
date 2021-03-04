"use strict";
/**
 * 
 * @param {number} radius radius of a circle to be used to calculate area
 * @return {number} area of the circle
 */
function areaOfCircle(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    return area;
}
/**
 * 
 * @param {number} radius radius of a cylinder 
 * @param {number} height height of the cylinder
 * @return {number} volume of the cylinder
 */
function volumeOfCylinder(radius, height) {
    let volume = areaOfCircle(radius) * height;
    return volume;
}

let prompt = require("prompt-sync")();
let question = +(prompt("if you want to calculate area enter 1 or if you want to calcualte volume enter 2: "));
if (question === 1) {
    let radius = +(prompt("Enter the radius of the circle: "));
    console.log(areaOfCircle(radius));
} if (question === 2) {
    let radius = +(prompt("Enter the radius of the cylinder: "));
    let height = +(prompt("Enter the height of the cylinder: "));
    console.log(volumeOfCylinder(radius, height));
}

exports.volumeOfCylinder = volumeOfCylinder;
exports.areaOfCircle = areaOfCircle;