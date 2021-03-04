"use strict";
/**
 * 
 * @param {number} width width of the house
 * @param {number} height height of the house
 * @param {number} depth length of the house
 * @param {number} sweep inclination of the roof
 * @return {number} volume of the house
 */
function houseVolume(width, height, depth, sweep){
    const livingHouseVolume = livingVolume(width, height, depth);
    const roofHouseVolume = roofVolume(sweep, width, depth);
    return  livingHouseVolume + roofHouseVolume;  
}

/**
 * 
 * @param {number} width width of the house
 * @param {number} height height of the house
 * @param {number} depth length of the house
 * @return {number} volume of the house without the roof
 */
function livingVolume(width, height, depth){
    return width * height * depth;
}

/**
 * 
 * @param {number} sweep inclined length of the roof
 * @param {number} width height of the house
 * @param {number} depth length of the house
 * @return {number} roof volume
 */
function roofVolume(sweep, width, depth){
    const roofHouseVolume = triangleArea(sweep, sweep, width) * depth;
    return roofHouseVolume;
}

/**
 * 
 * @param {number} sideA first side of the triangular roof
 * @param {number} sideB second side of the triangular roof
 * @param {number} sideC third side of the triangular roof
 * @return {number} area of the roof  
 */
function triangleArea(sideA, sideB, sideC){
    const sweep = (sideA + sideB + sideC)/2;
    const product = sweep * (sweep - sideA) * (sweep - sideB) * (sweep - sideC);
    const result = Math.sqrt(product);
    return result;  
}

console.log("expect 2080", houseVolume(16,10,10,10));

exports.triangleArea = triangleArea;
exports.roofVolume = roofVolume;
exports.livingVolume = livingVolume;
exports.houseVolume = houseVolume;